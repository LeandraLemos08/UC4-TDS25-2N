import { additional } from "./Additional";
import { IService } from "./Service";

export class UrgencyFee extends additional {
 
  getPrice(): number {
    return super.getPrice() + 50
  }
 
  getDescription(): string {
    return super.getDescription() + "+ Urgênciaaaaaaaaa";
  }
 getType(): string {
    return this.getType()
 }}