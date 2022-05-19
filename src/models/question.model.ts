export interface IQuestion {
  id?: string,
  techName?: string,
  seniority?: string,
  question: string;
  response: {
    isCorrect: boolean;
    text: string;
  };
  point: number;
}
