import { Seniority } from '@/models';

export const getSeniorityText = (seniority: number, initialState: number) => {
  const hightPercent = initialState * 0.75;
  const midPercent = initialState * 0.5;
  if (seniority === initialState) {
    return Seniority.SR;
  }
  if (seniority < initialState && seniority >= hightPercent) {
    return Seniority.SSR;
  }
  if (seniority < hightPercent && seniority >= midPercent) {
    return Seniority.JR;
  }
  return Seniority.TR;
};
