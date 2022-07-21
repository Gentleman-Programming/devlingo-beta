import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Main, FloatingButton } from './styled-components/';
import { MustachyWithDialog } from './';
import Layout from '../../components/Layout/Layout';
import { findAllTech } from '@/services';
import { persistDataLocalStorage } from '@/utilities';
import { IQuestion, localStorageEntities } from '@/models';

const messages = ['Hola!! Soy Mustachy y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const [text, setText] = useState(messages[message]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

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
    setText(messages[message]);
    if (message > messages.length - 1) {
      setQuest(true);
    }
  }, [message]);

  const HandleClick = async () => {
    if (text === messages[1]) {
      const questions = await findAllTech();
      questions.length = 12;
      const body = {
        data: questions,
        entity: localStorageEntities.questions,
      };
      persistDataLocalStorage<IQuestion>(body);
      navigate('/question/1');
    } else {
      setMessage((message) => message + 1);
    }
  };

  return (
    <Layout>
      <Main $quest={quest && viewportWidth > 700}>
        {viewportWidth < 700 && quest ? null : <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{text}</MustachyWithDialog>}
        <FloatingButton onClick={HandleClick}>Continuar</FloatingButton>
      </Main>
    </Layout>
  );
};

export default Dashboard;
