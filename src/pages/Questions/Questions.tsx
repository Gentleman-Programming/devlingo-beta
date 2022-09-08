import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MustachyWithDialog, Options } from '@/pages';
import { Main } from '@/pages/Dashboard/styled-components';
import { Layout } from '@/components';
import { getDataLocalStorage } from '@/utilities';
import { IQuestion, localStorageEntities } from '@/models';
import { useQuestions } from '@/hooks';
import { QuestionProvider } from '@/contexts';
import { Code } from '@/components';

const Questions = () => {
  const { id: index } = useParams();
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { IncrementSeniority, seniority, initialState } = useQuestions();
  const [questionCode, setQuestionCode] = useState<string>();

  const questionIndex = parseInt(index as string) - 1;
  const questions = getDataLocalStorage<IQuestion[]>(localStorageEntities.questions);
  const { response, id, question, point } = questions[questionIndex];

  const fetchQuestion = async (url: string) => {
    const req = await fetch(url, { mode: 'no-cors' });
    setQuestionCode(await req.text());
  };

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
    if (Number(index) > 1) {
      const df = initialState - seniority;
      IncrementSeniority(df);
      navigate('/question/1');
    }
  }, []);

  useEffect(() => {
    fetchQuestion(question);
  }, [question]);

  return (
    <QuestionProvider>
      <Layout>
        <Main $quest={viewportWidth > 700}>
          {viewportWidth > 700 && <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{question}</MustachyWithDialog>}
          <Code text={questionCode as string} />
          {id && index && <Options options={response} id={id} index={questionIndex + 1} points={point} />}
        </Main>
      </Layout>
    </QuestionProvider>
  );
};

export default Questions;
