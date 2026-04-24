import { Art } from "./Art";
import { IService } from "./Service";

export abstract class additional implements IService {

    constructor(protected art: Art){}

    getDescription(): string {
        return this.art.getDescription()
    }
    getPrice(): number {
        return this.art.getPrice()
    }
}