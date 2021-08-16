import {IRelationshipsBox} from "@/types/interfaces/Box/IRelationshipsBox";
import {IConnect} from "@/types/interfaces/Relationships/modules";

export function searchBoxById(boxes: IRelationshipsBox[], boxId: number): IRelationshipsBox{
    return boxes.filter(box => box.id === boxId)[0]
}

export function generateKeyForMap(firstConnect: IConnect, secondConnect: IConnect): string {
    return `${firstConnect.boxId}-${firstConnect.pointKey}-${secondConnect.boxId}-${secondConnect.pointKey}`
}
