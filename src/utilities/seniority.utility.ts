import { getDataLocalStorage } from '@/utilities';
import { localStorageEntities, IQuestion } from '@/models';

export const filterForTech = (techs: string[]) => {
  const questionsForSeniorities: any = {};
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  for (const tech of techs) {
    const questsTech = questions.filter(({ techName }) => techName === tech);
    const initialValue = questsTech.reduce((acum, { point }) => acum + point, 0);
    questionsForSeniorities[tech] = { questions: questsTech, initialValue };
  }
  return questionsForSeniorities;
};
