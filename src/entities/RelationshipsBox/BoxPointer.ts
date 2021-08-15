import {IBoxPointer} from "@/interfaces/relationshipsBox/IRelationshipsBox";
import {IRelationship} from "@/interfaces/relationshipsBox/itemsType/IRelationship";
import {ICoordinationPoint} from "@/interfaces/relationshipsBox/itemsType/ICoordinationPoint";
import {StatusType} from "@/types/common";

export default class BoxPointer implements IBoxPointer {
    relationship: IRelationship
    coordinates: ICoordinationPoint
    constructor(relationship: IRelationship, coordinates: ICoordinationPoint) {
        this.relationship = relationship
        this.coordinates = coordinates
    }
    getStatus(){
        return this.relationship.status
    }

    getConnectId() {
        return this.relationship.connectId
    }
}
