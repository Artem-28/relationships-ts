import {IRelationshipsBox} from "@/interfaces/relationshipsBox/IRelationshipsBox";
import {IConnect} from "@/interfaces/Relationships/IConnect";

export function searchBoxById(boxes: IRelationshipsBox[], boxId: number): IRelationshipsBox{
    return boxes.filter(box => box.id === boxId)[0]
}

export function generateKeyForMap(firstConnect: IConnect, secondConnect: IConnect): string {
    console.log(firstConnect)
    console.log(secondConnect)
    return `${firstConnect.boxId}-${firstConnect.pointKey}-${secondConnect.boxId}-${secondConnect.pointKey}`
}
