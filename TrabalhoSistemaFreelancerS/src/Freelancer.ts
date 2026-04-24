import { IFreelancer } from "./IFreelancer";
import { IService } from "./Service";
import { IFeedback } from "./Feedback";

class Freelancer implements IFreelancer {
    protected name: string
  getName(): string{
    return this.name;
  };
  private services: IService[] = [];
  private feedbacks: IFeedback[] = [];
 
  constructor(nome: string) {
    this.name = nome;
  }
 
   addService(service: IService): void {
       this.services.push(service)
   }

   getFeedback(feedback: IFeedback): void {
       this.feedbacks.push(feedback)
   }

   getGrades(): number {
       if (this.feedbacks.length === 0) return 0;
       let soma = 0;
       for(const f of this.feedbacks){
        soma +=f.getNote()
       } return soma / this.feedbacks.length
   }

   getWeightedGrades(): number {
       if(this.feedbacks.length === 0) return 0;
       let soma = 0
       let pesos = 0;
       for (const f of this.feedbacks){
        soma += f.getNote() * f.getPeso;
        pesos += f.getPeso;
       } return soma / pesos;
   }

   getDisplayFeedbacks(): void {
    for (const f of this.feedbacks){
       console.log(`Nota: ${f.getNote()} | Comentário: ${f.getComment()}`)
   }}

 getDisplayProfile(): void {
     console.log(this.name)
 }}