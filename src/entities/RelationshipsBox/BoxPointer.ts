import {IBoxPointer} from "@/types/interfaces/Box/modules";
import {IRelationship} from "@/types/interfaces/Relationships/IRelationship";
import {ICoordination} from "@/types/interfaces/Coordination/modules";

export default class BoxPointer implements IBoxPointer {
    relationship: IRelationship
    coordinates: ICoordination
    constructor(relationship: IRelationship, coordinates: ICoordination) {
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
