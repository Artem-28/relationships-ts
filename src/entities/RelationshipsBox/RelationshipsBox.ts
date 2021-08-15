import {IBoxPointer, IBoxPointersMap, IRelationshipsBox} from "@/interfaces/relationshipsBox/IRelationshipsBox";
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
