import { createContext, useEffect, useReducer, ReactNode, useState } from 'react';

import { questionReducer /* actionTypes */ } from '@/reducers';
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
  children: ReactNode;
}

export const QuestionProvider = ({ children }: props) => {
  const [questions, setQuestions] = useState<IQuestion[]>(getDataLocalStorage<IQuestion[]>(localStorageEntities.questions));

  const [state, setState] = useState(questions.reduce((acum, { point }) => acum + point, 0));

  const [seniority, setSeniority] = useState(state);

  const IncrementSeniority = (points: number): void => {
    setSeniority(updater(true, state, points));
    /*  dispatch({
		type: actionTypes.increment,
		payload: points,
    }); */
  };

  const DecrementSeniority = (points: number): void => {
    setSeniority(updater(false, state, points));
    /* dispatch({
      type: actionTypes.reduce,
      payload: points,
    }); */
  };

  const value = { IncrementSeniority, DecrementSeniority, seniority, initialState: state };

  console.log(value);
  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
};

const updater = (increment = false, state: number, points: number): number => {
  if (!increment) {
    if (state > 0) {
      const df = state - points;
      if (df > 0) return df;
      return 0;
    }

    return state;
  } else if (increment) {
    return state + points;
  } else {
    return state;
  }
};
