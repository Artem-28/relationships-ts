import {IRelationshipsBox} from "@/types/interfaces/Box/IRelationshipsBox";
import {IBoxPointer, IBoxPointersMap} from "@/types/interfaces/Box/modules";
import {PointerKey} from "@/types/common";

export default class RelationshipsBox implements IRelationshipsBox{
    id: number
    pointer: IBoxPointersMap

    constructor(id: number, pointer: IBoxPointersMap) {
        this.id = id
        this.pointer = pointer
    }
    getPointerByType(pointKey: PointerKey): IBoxPointer {
        return this.pointer[pointKey]
    }
}
