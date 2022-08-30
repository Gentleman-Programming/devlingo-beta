import { useEffect, useState } from 'react';

import { Main, FloatingButton } from './styled-components/';
import { MustachyWithDialog, Options } from './';
import { Code } from '@/components/';
import Layout from '../../components/Layout/Layout';

import { option } from '@/models';

const messages = ['Hola!! Soy Mustachi y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

const question = '¿Cuál es el resultado?';

const code =
  'function suma() {\n\tconst b = 2;\n\treturn suma2();\n}\n\nconst b = 33;\nconst c = 13;\n\nfunction suma2(){\n\tconst c = 33\n\treturn a + b + c;\n}';

const options: Array<option> = [
  {
    option: '5',
    isCorrect: true
  },
  {
    option: '7',
    isCorrect: false
  },
  {
    option: '8',
    isCorrect: false
  }
];

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const [text, setText] = useState(messages[message]);
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

  useEffect(() => {
    if (quest) {
      setText(question);
    }
  }, [quest]);

  const HandleCLick = () => {
    setMessage(message => message + 1);
  };

  return (
    <Layout>
      <Main $quest={quest && viewportWidth > 700}>
        {viewportWidth < 700 && quest ? null : <MustachyWithDialog dialogWidth="calc(17ch + 10vmax)">{text}</MustachyWithDialog>}

        {quest && <Code text={code} />}
        {quest && <Options options={options} />}
        {!quest && <FloatingButton onClick={HandleCLick}>Continuar</FloatingButton>}
      </Main>
    </Layout>
  );
};

export default Dashboard;
