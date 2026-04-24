import { IService } from "./Service"

export class Art implements IService {
  getPrice(): number {
    return 500
  }
 
  getDescription(): string {
    return "Uma obra de arte";
  }

 getType(): string {
    return this.getType()
 }}