import { IService } from "./Service"
import { IFeedback } from "./Feedback"
export interface IFreelancer {
  getName(): string;
  addService(service: IService): void;
  getFeedback(feedback: IFeedback): void;
  getGrades(): number;
  getWeightedGrades(): number;
  getDisplayFeedbacks(): void;
  getDisplayProfile(): void;
}