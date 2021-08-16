import RelationshipsBox from "@/entities/RelationshipsBox/RelationshipsBox";
import Coordination from "@/entities/Coordination/Coordination";
import {IRelationshipsBox} from "@/types/interfaces/Box/IRelationshipsBox";
import BoxPointer from "@/entities/RelationshipsBox/BoxPointer";
import {IRelationship} from "@/types/interfaces/Relationships/IRelationship";
import {searchBoxById} from "@/helpers/common";
import {
    IConnectionOfBoxesData,
    IUpdateCoordinationPointerData,
    IUpdatePointStatus
} from "@/types/storeType/Boxes";


export default {
    namespaced: true,
    state: [],
    getters: {
        getBoxById: (state: IRelationshipsBox[]) => (id: number): IRelationshipsBox => state.filter(box => box.id === id)[0],
        boxes: (state: IRelationshipsBox[]): IRelationshipsBox[] => state
    },
    mutations: {
        updateCoordinationPointer(state: IRelationshipsBox[], data: IUpdateCoordinationPointerData) {
            const boxPointer = searchBoxById(state, data.boxId)
            boxPointer.pointer.top.coordinates = data.coordination.top
            boxPointer.pointer.right.coordinates = data.coordination.right
            boxPointer.pointer.bottom.coordinates = data.coordination.bottom
            boxPointer.pointer.left.coordinates = data.coordination.left

        },
        deleteConnectionOfBoxes(state: IRelationshipsBox[], relationship: IRelationship) {
            if(relationship.connect){
                const firstBox = searchBoxById(state, relationship.connect.firstConnect.boxId)
                const secondBox = searchBoxById(state, relationship.connect.secondConnect.boxId)
                const firstBoxPoint = firstBox.getPointerByType(relationship.connect.firstConnect.pointKey)
                const secondBoxPoint = secondBox.getPointerByType(relationship.connect.secondConnect.pointKey)
                firstBoxPoint.relationship.connectId = null
                firstBoxPoint.relationship.connect = null
                firstBoxPoint.relationship.status = 'empty'
                secondBoxPoint.relationship.connectId = null
                secondBoxPoint.relationship.connect = null
                secondBoxPoint.relationship.status = 'empty'
            }
        },
        connectionOfBoxes(state: IRelationshipsBox[], data: IConnectionOfBoxesData) {
            const relationship = {
                firstConnect: data.firstConnect,
                secondConnect: data.secondConnect
            }
            const firstBox = searchBoxById(state, data.firstConnect.boxId)
            const secondBox = searchBoxById(state, data.secondConnect.boxId)
            const firstBoxRelationship = firstBox.getPointerByType(data.firstConnect.pointKey).relationship
            const secondBoxRelationship = secondBox.getPointerByType(data.secondConnect.pointKey).relationship
            firstBoxRelationship.connect = relationship
            firstBoxRelationship.status = 'ready'
            firstBoxRelationship.connectId = data.connectionKey
            secondBoxRelationship.connect = relationship
            secondBoxRelationship.status = 'ready'
            secondBoxRelationship.connectId = data.connectionKey
        },
        updatePointStatus(state: IRelationshipsBox[], data: IUpdatePointStatus) {
            const box =  searchBoxById(state, data.boxId)
            box.getPointerByType(data.pointKey).relationship.status = data.status
        },
        createBox(state: IRelationshipsBox[]) {
            const id = Date.now()
            const Box = new RelationshipsBox( id, {
                top: new BoxPointer({ status: 'empty', connect: null, connectId: null }, new Coordination(0, 0)),
                left: new BoxPointer({ status: 'empty', connect: null, connectId: null }, new Coordination(0, 0)),
                bottom: new BoxPointer({ status: 'empty', connect: null, connectId: null }, new Coordination(0, 0)),
                right: new BoxPointer({ status: 'empty', connect: null, connectId: null }, new Coordination(0, 0)),
            })
            state.push(Box)
        },
        deleteBox(state: IRelationshipsBox[], boxId: number) {
            const index = state.findIndex(box => box.id === boxId)
            state.splice(index, 1)
        }
    }
}
