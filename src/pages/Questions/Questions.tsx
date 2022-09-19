import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { Main } from '@/pages/Dashboard/styled-components';
import { MustachyWithDialog, Options } from '@/pages';
import { Layout } from '@/components';
import { getDataLocalStorage, AuthFlag } from '@/utilities';
import { IQuestion, localStorageEntities, FirebaseUser } from '@/models';
import { Code } from '@/components';
import { QuestionProvider } from '@/contexts';
import { useQuestions } from '@/hooks';

type prop = {
  user: FirebaseUser;
};

const Questions = () => {
  const { id: index } = useParams();
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const questionIndex = parseInt(index as string) - 1;
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const { progress: currentQuestion } = useSelector(({ user }: prop) => user.test);
  const { response, id, question, point, example } = questions[questionIndex];

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

  return (
    <QuestionProvider>
      {!AuthFlag ? (
        <Main $quest={viewportWidth > 700}>
          {viewportWidth > 700 && <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{question}</MustachyWithDialog>}
          {example && <Code text={example} />}
          {id && index && <Options options={response} id={id} index={questionIndex + 1} points={point} />}
        </Main>
      ) : (
        <Layout>
          <Main $quest={viewportWidth > 700}>
            {viewportWidth > 700 && <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{question}</MustachyWithDialog>}
            {example && <Code text={example} />}
            {id && index && <Options options={response} id={id} index={questionIndex + 1} points={point} />}
          </Main>
        </Layout>
      )}
    </QuestionProvider>
  );
};

export default Questions;
