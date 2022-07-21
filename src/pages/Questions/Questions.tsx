import { useState, useEffect } from 'react';
import { MustachyWithDialog, Options } from '@/pages';
import { Main } from '@/pages/Dashboard/styled-components';
import { Layout } from '@/components';
import { useParams } from 'react-router';
import { getDataLocalStorage } from '@/utilities';
import { IQuestion, localStorageEntities } from '@/models';
import { QuestionProvider } from '@/contexts';

const Questions = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { id: index } = useParams();
  const questionIndex = parseInt(index as string) - 1;
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const { response, id, question, point } = questions[questionIndex];

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <QuestionProvider>
      <Layout>
        <Main $quest={viewportWidth > 700}>
          {viewportWidth > 700 && <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{question}</MustachyWithDialog>}
          {id && index && <Options options={response} id={id} index={questionIndex + 1} points={point} />}
        </Main>
      </Layout>
    </QuestionProvider>
  );
};

export default Questions;
