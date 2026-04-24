import { Art } from "./Art";

class theFrame extends Art {
  getDescription(): string {
      return super.getDescription() + "+ Moldura"
  }
  getPrice(): number {
      return super.getPrice()
  }
  getType(): string { return "Estética"; }
}
 
class theVanish extends Art {
  getDescription(): string {
      return super.getDescription() + "+ Verniz"
  }

  getPrice(): number {
      return super.getPrice()
  }
  getType(): string { return "Acabamento"; }
}
 
