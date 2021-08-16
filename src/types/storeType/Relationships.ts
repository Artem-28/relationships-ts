import {IConnect} from "@/types/interfaces/Relationships/modules";

declare module '../../store/modules/relationships' {
    interface StateRelationships {
        connection: IConnect[]
        coordinationLine: ICoordinationLineMap
    }
}

export interface ICoordinationLineMap {
    [key: string]: { firstConnect: IConnect, secondConnect: IConnect}
}
