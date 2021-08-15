import {StatusType} from "@/types/common";
import {IConnect} from "@/interfaces/Relationships/IConnect";

export interface IRelationship {
    status: StatusType
    connect: null | {firstConnect: IConnect, secondConnect: IConnect}
    connectId: null | string
}
