import {StatusType} from "@/types/common";
import {IConnect} from "@/types/interfaces/Relationships/modules";

export interface IRelationship {
    status: StatusType
    connect: null | {firstConnect: IConnect, secondConnect: IConnect}
    connectId: null | string
}

