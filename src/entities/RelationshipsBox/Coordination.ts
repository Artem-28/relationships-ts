import {ICoordinationPoint} from "@/interfaces/relationshipsBox/itemsType/ICoordinationPoint";

export default class Coordination implements ICoordinationPoint {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
