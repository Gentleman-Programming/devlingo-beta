import { useEffect, useState } from 'react';
import {
  Main,
  HeroButtons,
  FloatingButton,
  Button,
  OptionsContainer,
  CodeContainer
} from './styled-components/dashboard.styled.components';
import { MustachyWithDialog } from './';
import { nanoid } from 'nanoid';
import { Code } from '@/components/';

const messages = ['Hola!! Soy Mustachi y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

const question = '¿Cuál es el resultado?';

const code =
  'function suma() {\n\tconst b = 2;\n\treturn suma2();\n}\n\nconst b = 33;\nconst c = 13;\n\nfunction suma2(){\n\tconst c = 33\n\treturn a + b + c;\n}';

const options = [
  {
    option: '5',
    isCorrect: true
  },
  {
    option: '7'
  },
  {
    option: '8'
  }
];

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const [text, setText] = useState(messages[message]);
  const [width, setWidth] = useState('15ch');
  const [dialogWidth, setDialogWidth] = useState('441px');

  useEffect(() => {
    setText(messages[message]);
    if (message > messages.length - 1) {
      setQuest(true);
    }
  }, [message]);

  useEffect(() => {
    if (quest) {
      setWidth('10ch');
      setText(question);
      setDialogWidth('15ch');
    }
  }, [quest]);

  const HandleCLick = () => {
    setMessage((message) => message + 1);
  };

  return (
    <Main>
      <MustachyWithDialog style={{ gridArea: 'mustachy' }} width={width} dialogWidth={dialogWidth}>
        {text}
      </MustachyWithDialog>
      {quest && (
        <CodeContainer>
          <Code text={code} />
        </CodeContainer>
      )}
      {quest && (
        <OptionsContainer>
          {options.map(({ option, isCorrect }) => (
            <Button key={nanoid()}>{option}</Button>
          ))}
        </OptionsContainer>
      )}
      {!quest && <FloatingButton onClick={HandleCLick}>Continuar</FloatingButton>}
    </Main>
  );
};

export default Dashboard;
