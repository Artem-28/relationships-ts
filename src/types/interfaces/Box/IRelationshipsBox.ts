import {PointerKey} from "@/types/common";
import {IBoxPointer, IBoxPointersMap} from "@/types/interfaces/Box/modules";

export interface IRelationshipsBox {
    id: number,
    pointer: IBoxPointersMap,
    getPointerByType: (pointKey: PointerKey) => IBoxPointer

}

