import { additional } from "./Additional";
import { Art } from "./Art";
import { IService } from "./Service";

export abstract class percentage extends additional {
    percentual: number;
    label: string;
    constructor(art: Art, percentual: number, label: string){
        super(art)
        this.percentual = percentual
        this.label = label
    }
  getPrice(): number {
    return this.art.getPrice() * (1 + this.percentual);
  }
 
  getDescription(): string {
    const add = this.art.getPrice() * this.percentual;
    return (
      `${this.art.getDescription()} | 📈 ${this.label} (+${(this.percentual * 100).toFixed(0)}%): ` +
      `+R$ ${add.toFixed(2)}`
    );
  }
}