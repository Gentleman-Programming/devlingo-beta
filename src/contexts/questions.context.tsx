import { createContext, useReducer } from 'react';

import { questionReducer, actionTypes } from '../reducers';
import { getDataLocalStorage } from '@/utilities';
import { IQuestion, localStorageEntities } from '@/models';

type questionContextProps = {
  seniority: number;
  initialState: number;
  IncrementSeniority: (points: number) => void;
  DecrementSeniority: (points: number) => void;
};

export const QuestionsContext = createContext<questionContextProps>({} as questionContextProps);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const QuestionProvider = ({ children }: props) => {
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);

  const state = questions.reduce((acum, { point }) => acum + point, 0);

  const [seniority, dispatch] = useReducer(questionReducer, state);

  const IncrementSeniority = (points: number): void => {
    dispatch({
      type: actionTypes.increment,
      payload: points,
    });
  };

  const DecrementSeniority = (points: number): void => {
    dispatch({
      type: actionTypes.reduce,
      payload: points,
    });
  };

  const value = { IncrementSeniority, DecrementSeniority, seniority, initialState: state };

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
};
