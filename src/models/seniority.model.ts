import { IQuestion } from './question.model';

export const enum Seniority {
  TR = 'trainee',
  JR = 'junior',
  SSR = 'semi senior',
  SR = 'senior',
  None = '',
}

export interface IQuestionsForSeniority {
  js: ICategorieForSeniority;
  html: ICategorieForSeniority;
  css: ICategorieForSeniority;
}

export interface ICategorieForSeniority {
  questions: IQuestion[];
  initialValue: number;
}
