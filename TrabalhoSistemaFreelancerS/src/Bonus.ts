import { additional } from "./Additional";
import { IService } from "./Service";

export class BonusPremium extends additional {

  getPrice(): number {
    return super.getPrice() 
  }
 
  getDescricao(): string {
    return super.getDescription()+" + Bônus"
  }
 getType(): string {
    return this.getType()
 }}