import { useContext } from 'react';
import { QuestionsContext } from '@/contexts';

export const useQuestions = () => {
  const { DecrementSeniority, IncrementSeniority, seniority, initialState } = useContext(QuestionsContext);
  return { DecrementSeniority, IncrementSeniority, seniority, initialState };
};
