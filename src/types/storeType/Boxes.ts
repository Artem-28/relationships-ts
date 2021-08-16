import {PointerKey, StatusType} from "@/types/common";
import {IConnect} from "@/types/interfaces/Relationships/modules";
import {ICoordinationMap} from "@/types/interfaces/Coordination/ICoordination";

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
