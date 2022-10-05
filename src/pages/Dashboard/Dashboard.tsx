import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useSeniority, useUser } from '@/hooks';
import { IQuestion, localStorageEntities, ITest } from '@/models';
import { findAllTech } from '@/services';
import { persistDataLocalStorage, filterForTech, getSeniorityText } from '@/utilities';
import { MustachyWithDialog } from './';
import { FloatingButton, Main } from './styled-components/';

const messages = ['Hola!! Soy Mustachy y seré tu guía durante esta travesía', 'Te voy a hacer unas preguntas para conocer tu nivel'];

export const Dashboard = () => {
  const [quest, setQuest] = useState(false);
  const [message, setMessage] = useState(0);
  const { CreateSeniorities } = useSeniority();
  const [text, setText] = useState(messages[message]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLoad = async () => {
    const questions = await findAllTech();
    const initSeniorities: any = {};

    let acumPts = 0;

    const body = {
      data: questions,
      entity: localStorageEntities.questions,
    };
    persistDataLocalStorage<IQuestion>(body);

    const questionsForTech = filterForTech();
    const techs = Object.keys(questionsForTech);

    techs.forEach((tech) => {
      const { initialValue } = questionsForTech[tech];

      initSeniorities[tech] = {
        initialValue,
        pts: initialValue,
        txt: getSeniorityText(initialValue, initialValue),
      };

      acumPts += initialValue;
    });

    const generalSeniority = getSeniorityText(acumPts, acumPts);
    initSeniorities.global = generalSeniority;

    CreateSeniorities(initSeniorities);
  };

  const HandleClick = () => {
    if (text === messages[1]) {
      const { progress } = user.test as ITest;
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
