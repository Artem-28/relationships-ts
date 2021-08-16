import {ICoordination} from "@/types/interfaces/Coordination/modules";

export default class Coordination implements ICoordination {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
