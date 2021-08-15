import {IConnect} from "@/interfaces/Relationships/IConnect";

export interface ICoordinationLineMap {
    [key: string]: { firstConnect: IConnect, secondConnect: IConnect}
}
