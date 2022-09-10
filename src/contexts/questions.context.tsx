import { createContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { questionReducer, actionTypes } from '../reducers';
import { getDataLocalStorage } from '@/utilities';
import { FirebaseUser, IQuestion, localStorageEntities } from '@/models';

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

type prop = {
  user: FirebaseUser;
};

export const QuestionProvider = ({ children }: props) => {
  const { pts: lastPts } = useSelector(({ user }: prop) => user.test);
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const questionsPts = questions.reduce((acum, { point }) => acum + point, 0);
  const init = () => (lastPts > 0 ? lastPts : questionsPts);
  const state = init();

  const [seniority, dispatch] = useReducer(questionReducer, state, init);

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

  const value = { IncrementSeniority, DecrementSeniority, seniority, initialState: questionsPts };

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
};
