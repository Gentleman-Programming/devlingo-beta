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
      return state > 0 ? state - action.payload : state;
    case actionTypes.increment:
      return state + action.payload;
    default:
      return state;
  }
};
