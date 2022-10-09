import { getDataLocalStorage, getSeniorityText } from '@/utilities';
import { localStorageEntities, IQuestion } from '@/models';

export const filterForTech = (techs: string[] = ['JavaScript', 'Html5']) => {
  const questionsForSeniorities: any = {};
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);

  techs.forEach((tech) => {
    const questsTech = questions.filter(({ techName }) => techName === tech);
    const initialValue = questsTech.reduce((acum, { point }) => acum + point, 0);

    questionsForSeniorities[tech] = { questions: questsTech, initialValue };
  });

  return questionsForSeniorities;
};

export const determinateSeniorities = (seniorities: any) => {
  const questionsForTech = filterForTech();
  const currentSeniorities: any = {};

  let acumInitial = 0;
  let acumPts = 0;

  for (const tech in questionsForTech) {
    const initialValue = questionsForTech[tech].initialValue;
    const currentValue = seniorities[tech].pts;
    const seniorityText = getSeniorityText(currentValue, initialValue);

    acumInitial += initialValue;
    acumPts += currentValue;

    currentSeniorities[tech].txt = seniorityText;
    currentSeniorities[tech].pts = currentValue;
  }

  currentSeniorities.global = getSeniorityText(acumPts, acumInitial);

  return currentSeniorities;
};
