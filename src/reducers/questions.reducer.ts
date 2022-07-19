export const enum actionTypes {
  reduce = 'reduce',
  increment = 'increment',
}

interface actionReducer {
  payload: number;
  type: actionTypes;
}

export const questionReducer = (state: number, action: actionReducer): number => {
  switch (action.type) {
    case actionTypes.reduce:
      if (state > 0) {
        const df = state - action.payload;
        if (df > 0) return df;
        return 0;
      }
      return state;
    case actionTypes.increment:
      return state + action.payload;
    default:
      return state;
  }
};
