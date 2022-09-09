import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { FirebaseUser, IQuestion, localStorageEntities, ITest } from '@/models';
import { findAllTech } from '@/services';
import { persistDataLocalStorage } from '@/utilities';
import { MustachyWithDialog } from './';
import { FloatingButton, Main } from './styled-components/';

const messages = ['Hola!! Soy Mustachy y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

interface prop {
  user: FirebaseUser;
}

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const [text, setText] = useState(messages[message]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { test } = useSelector(({ user }: prop) => user);
  const navigate = useNavigate();

  const handleLoad = async () => {
    const questions = await findAllTech();

    const body = {
      data: questions,
      entity: localStorageEntities.questions,
    };

    persistDataLocalStorage<IQuestion>(body);
  };

  const HandleClick = () => {
    if (text === messages[1]) {
      const { progress } = test as ITest;
      navigate(`/question/${progress}`);
    } else {
      setMessage((message) => message + 1);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

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

  return (
    <Main $quest={quest && viewportWidth > 700}>
      {viewportWidth < 700 && quest ? null : <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{text}</MustachyWithDialog>}
      <FloatingButton onClick={HandleClick}>Continuar</FloatingButton>
    </Main>
  );
};

export default Dashboard;
