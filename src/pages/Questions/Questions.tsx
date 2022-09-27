import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { FloatingButton, Main } from '@/pages/Dashboard/styled-components';
import { MustachyWithDialog, Options } from '@/pages';
import { Layout } from '@/components';
import { getDataLocalStorage, getSeniorityText } from '@/utilities';
import { IQuestion, localStorageEntities, FirebaseUser, IResponse, Categories, Seniority, Status } from '@/models';
import { Code } from '@/components';
import { useQuestions, useSeniority } from '@/hooks';
import { modifyUser } from '@/redux';

type prop = {
  user: FirebaseUser;
};

const Questions = () => {
  const { id: index } = useParams();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { seniorities, updateSeniority } = useSeniority();
  const { seniority, initialState, DecrementSeniority } = useQuestions();

  const [state, setState] = useState<Status>(Status.Pending);

  const questionIndex = parseInt(index as string) - 1;
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const limitQuestions = questions.length + 1;
  const { progress: currentQuestion } = useSelector(({ user }: prop) => user.test);
  const { response, id, question, point, example } = questions[questionIndex];
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
    if (currentQuestion !== questionIndex) navigate(`/question/${currentQuestion}`);
  }, []);

  useEffect(() => {
    if (state === Status.Nexting) {
      navigate(`/question/${nextQuestion}`, { replace: true });

      if (nextQuestion === limitQuestions) {
        dispatch(
          modifyUser({ seniorityGlobal: seniorityText, test: { name: Categories.General, progress: questionIndex, pts: seniority } }),
        );

        navigate('/results', { replace: true, state: seniorityText });
      }
      setState(Status.Pending);
    }
  }, [state]);

  const handleSelect = ({ isCorrect }: IResponse) => {
    setState(Status.Answered);
    dispatch(modifyUser({ test: { name: Categories.General, progress: nextQuestion, pts: seniority } }));

    if (!isCorrect) {
      dispatch(modifyUser({ test: { name: Categories.General, progress: nextQuestion, pts: seniority - point } }));
      updateSeniority({ js: { pts: 10 + questionIndex + 2, txt: Seniority.SR } });
      DecrementSeniority(point);
    }

    console.log(seniorities);
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
