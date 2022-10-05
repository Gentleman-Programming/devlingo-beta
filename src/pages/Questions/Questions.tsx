import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { FloatingButton, Main } from '@/pages/Dashboard/styled-components';
import { MustachyWithDialog, Options } from '@/pages';
import { Layout, Code } from '@/components';
import { getDataLocalStorage, getSeniorityText } from '@/utilities';
import { IQuestion, localStorageEntities, IResponse, Categories, Seniority, Status, ICategory } from '@/models';
import { useQuestions, useSeniority, useUser } from '@/hooks';

const Questions = () => {
  const { id: index } = useParams();
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { user, ModifyUser } = useUser();
  const { seniority, initialState } = useQuestions();
  const { seniorities, UpdateSeniorities } = useSeniority();

  const [state, setState] = useState<Status>(Status.Pending);

  const questionIndex = parseInt(index as string) - 1;
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const limitQuestions = questions.length + 1;
  const { response, id, question, point, example, techName } = questions[questionIndex];
  const seniorityText: Seniority = getSeniorityText(seniority, initialState);
  const nextQuestion = questionIndex + 2;

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if ((user.test?.progress as number) !== questionIndex) navigate(`/question/${user.test?.progress as number}`);
  }, []);

  useEffect(() => {
    if (state === Status.Nexting) {
      navigate(`/question/${nextQuestion}`, { replace: true });

      if (nextQuestion === limitQuestions) {
        ModifyUser({ seniorityGlobal: seniorityText, test: { name: Categories.General, progress: questionIndex, pts: seniority } });

        navigate('/results', { replace: true, state: seniorityText });
      }
      setState(Status.Pending);
    }
  }, [state]);

  const handleSelect = ({ isCorrect }: IResponse) => {
    setState(Status.Answered);
    const tech: ICategory = seniorities[techName];
    ModifyUser({ test: { name: Categories.General, progress: nextQuestion, pts: seniority } });

    if (!isCorrect) {
      const currentPts = tech.pts - point;

      ModifyUser({ test: { name: Categories.General, progress: nextQuestion, pts: seniority - point } });

      UpdateSeniorities({
        ...seniorities,
        [techName as string]: {
          ...tech,
          pts: currentPts,
          txt: getSeniorityText(currentPts, tech?.initialValue as number),
        },
        global: getSeniorityText(seniority, initialState),
      });
    }
  };

  const goNext = () => {
    setState((status) => (status === Status.Answered ? Status.Nexting : Status.Pending));
  };

  return (
    <Layout>
      <Main $quest={viewportWidth > 700}>
        {viewportWidth > 700 && <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{question}</MustachyWithDialog>}
        {example && <Code text={example} />}
        {id && index && (
          <Options state={state} options={response} id={id} index={questionIndex + 1} points={point} handleSelect={handleSelect} />
        )}
        <FloatingButton disabled={state !== Status.Answered} onClick={goNext}>
          ¡Siguiente!
        </FloatingButton>
      </Main>
    </Layout>
  );
};

export default Questions;
