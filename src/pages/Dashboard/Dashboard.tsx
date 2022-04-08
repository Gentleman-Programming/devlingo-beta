import { useEffect, useState } from 'react';
import { Main, HeroButtons, Button, OptionsContainer } from './styled-components/dashboard.styled.components';
import { MustachyWithDialog } from './';
import { nanoid } from 'nanoid';

import questionImage from '@/assets/question1.png';

const messages = ['Hola!! Soy Mustachi y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

const question = '¿Cuál es el resultado?';

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

  const continueButton = (
    <HeroButtons onClick={HandleCLick} to="/dashboard" primary="true" style={{ position: 'fixed', bottom: '2em', right: '2em' }}>
      Continuar
    </HeroButtons>
  );

  return (
    <Main style={quest ? { display: 'grid', gridTemplateAreas: '"mustachy quest" "options quest"' } : {}}>
      <MustachyWithDialog style={{ gridArea: 'mustachy' }} width={width} dialogWidth={dialogWidth}>
        {text}
      </MustachyWithDialog>
      {quest && (
        <div style={{ gridArea: 'quest' }}>
          <img src={questionImage} alt="Javascript code" decoding="async" />
        </div>
      )}
      {quest && (
        <OptionsContainer>
          {options.map(({ option, isCorrect }) => (
            <Button key={nanoid()}>{option}</Button>
          ))}
        </OptionsContainer>
      )}
      {!quest && continueButton}
    </Main>
  );
};

export default Dashboard;
