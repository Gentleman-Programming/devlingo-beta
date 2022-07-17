import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Main, FloatingButton } from './styled-components/';
import { MustachyWithDialog } from './';
import Layout from '../../components/Layout/Layout';

const messages = ['Hola!! Soy Mustachi y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const [text, setText] = useState(messages[message]);
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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

  const HandleCLick = () => {
    if (text === messages[1]) {
      navigate('/question/0');
    } else {
      setMessage((message) => message + 1);
    }
  };

  return (
    <Layout>
      <Main $quest={quest && viewportWidth > 700}>
        {viewportWidth < 700 && quest ? null : <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{text}</MustachyWithDialog>}
        {!quest && <FloatingButton onClick={HandleCLick}>Continuar</FloatingButton>}
      </Main>
    </Layout>
  );
};

export default Dashboard;
