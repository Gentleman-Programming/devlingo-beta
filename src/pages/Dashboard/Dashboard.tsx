import { useState } from 'react';
import { Main, Globo, GloboCointainer, HeroButtons } from './styled-components/dashboard.styled.components';
import { Mustachy } from './Mustachy';

export const Dashboard = () => {
  const [text, setText] = useState('Hola!! Soy Mustachi y seré tu guía durante esta travesía');

  const HandleCLick = () => {
    setText('Te voy a hacer unas preguntas para conocer tu nivel')
  };

  return (
    <Main>
      <Mustachy />

      <GloboCointainer>
        <Globo>
          <p>{text}</p>
        </Globo>
      </GloboCointainer>

      <HeroButtons onClick={HandleCLick} to="/dashboard" primary="true">
        Continuar
      </HeroButtons>
      
    </Main>
  );
};

export default Dashboard;