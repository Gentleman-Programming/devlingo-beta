import { createContext, useReducer } from 'react';
import { questionReducer, actionTypes } from '../reducers';

type questionContextProps = {
  seniority: number;
  IncrementSeniority: (points: number) => void;
  DecrementSeniority: (points: number) => void;
};

export const QuestionsContext = createContext<questionContextProps>({} as questionContextProps);

interface props {
  children: JSX.Element | JSX.Element[];
}

const initialState = 500;

export const QuestionProvider = ({ children }: props) => {
  const [seniority, dispatch] = useReducer(questionReducer, initialState);

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

  return <QuestionsContext.Provider value={{ IncrementSeniority, DecrementSeniority, seniority }}>{children}</QuestionsContext.Provider>;
};
