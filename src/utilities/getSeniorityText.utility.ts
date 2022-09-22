import { Seniority } from '@/models';

export const getSeniorityText = (seniority: number, initialState: number) => {
  if (seniority === initialState) {
    return Seniority.SR;
  } else if (seniority < initialState && seniority >= 950) {
    return Seniority.SSR;
  } else if (seniority < 950 && seniority >= 400) {
    return Seniority.JR;
  } else {
    return Seniority.TR;
  }
};
