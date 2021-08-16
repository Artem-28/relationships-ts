import {IRelationship} from "@/types/interfaces/Relationships/IRelationship";
import {ICoordination} from "@/types/interfaces/Coordination/modules";
import {StatusType} from "@/types/common";

export interface IBoxPointersMap {
    top: IBoxPointer,
    right: IBoxPointer,
    bottom: IBoxPointer,
    left: IBoxPointer
}

export interface IBoxPointer {
    relationship: IRelationship
    coordinates: ICoordination
    getStatus: () => StatusType
    getConnectId: () => string | null
}
