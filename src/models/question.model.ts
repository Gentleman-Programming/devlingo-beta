import { IResponse } from './response.model';

export interface IQuestion {
  id?: string;
  techName?: string;
  seniority?: string;
  question: string;
  response: IResponse[];
  point: number;
}

export interface QuestionContextProps {
  questionStates: IQuestion[];
  response: (isCorrect: boolean, point: number) => void;
}
