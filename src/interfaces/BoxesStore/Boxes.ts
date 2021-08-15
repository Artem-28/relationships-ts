import {PointerKey, StatusType} from "@/types/common";
import {IConnect} from "@/interfaces/Relationships/IConnect";
import {ICoordinationMap} from "@/interfaces/relationshipsBox/itemsType/ICoordinationPoint";

export interface IUpdatePointStatus {
    boxId: number,
    pointKey: PointerKey,
    status: StatusType
}

export interface IConnectionOfBoxesData {
    firstConnect: IConnect
    secondConnect: IConnect
    connectionKey: string
}

export interface IUpdateCoordinationPointerData {
    boxId: number
    coordination: ICoordinationMap
}
