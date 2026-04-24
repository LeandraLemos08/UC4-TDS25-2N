import { additional } from "./Additional";

export class priority extends additional {
 
  getPrice(): number {
    return super.getPrice()
  }
 
  getDescription(): string {
    return super.getDescription() + " + Entrega Prioritária";
  }
}