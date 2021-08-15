import {IRelationship} from "@/interfaces/relationshipsBox/itemsType/IRelationship";
import {ICoordinationPoint} from "@/interfaces/relationshipsBox/itemsType/ICoordinationPoint";
import {PointerKey, StatusType} from "@/types/common";

export interface IRelationshipsBox {
    id: number,
    pointer: IBoxPointersMap,
    getPointerByType: (pointKey: PointerKey) => IBoxPointer

}

export interface IBoxPointersMap {
    top: IBoxPointer,
    right: IBoxPointer,
    bottom: IBoxPointer,
    left: IBoxPointer
}

export interface IBoxPointer {
    relationship: IRelationship
    coordinates: ICoordinationPoint
    getStatus: () => StatusType
    getConnectId: () => string | null
}
