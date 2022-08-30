import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button } from '@/components/';
import { FirebaseUser, IResponse, seniority as SENIORITY } from '@/models';
import { useQuestions } from '@/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { updateDocumentInDb } from '@/services/firebase/firebase.service';
import { modifyUser } from '@/redux';

export const OptionsContainer = styled.div`
  display: grid;
  grid-area: options;
  row-gap: 1em;
  align-items: center;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-template-rows: min-content min-content;
  }
`;

interface props {
  options: IResponse[];
  id: string;
  index: number;
  points: number;
}

const Container = styled.div`
  display: grid;
  row-gap: 1em;
  align-items: center;
  color: #fff;
  margin-top: 1em;

  @media only screen and (min-width: 700px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

const getSeniorityText = (seniority: number, initialState: number) => {
  if (seniority === initialState) {
    return SENIORITY.SR;
  } else if (seniority < initialState && seniority > 50) {
    return SENIORITY.SSR;
  } else if (seniority < 50 && seniority > 20) {
    return SENIORITY.JR;
  } else {
    return SENIORITY.TR;
  }
};

type prop = {
  user: FirebaseUser;
};

export function Options({ options, index, id, points }: props) {
  const { seniority, initialState, DecrementSeniority } = useQuestions();
  const { uid } = useSelector(({ user }: prop) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seniorityText = getSeniorityText(seniority, initialState);

  const handleClick =
    ({ isCorrect }: IResponse) =>
    async () => {
      const nextQuestion = +index + 1;
      if (nextQuestion === 13) {
        await updateDocumentInDb({ seniorityGlobal: seniorityText }, 'users', uid);
        dispatch(modifyUser({ seniorityGlobal: seniorityText }));
        return navigate('/results', { replace: true, state: seniorityText });
      }
      if (!isCorrect) DecrementSeniority(points);
      navigate(`/question/${nextQuestion}`, { replace: true });
    };

  return (
    <div key={id} style={{ gridArea: 'options' }}>
      <div>
        <OptionsContainer>
          {options.map((option: IResponse, index) => (
            <Button key={index} onClick={handleClick(option)}>
              {option.text}
            </Button>
          ))}
        </OptionsContainer>
      </div>
      <Container>
        <h2>Puntaje inicial: {initialState}</h2>
        <h2>Puntaje actual: {seniority}</h2>
      </Container>
    </div>
  );
}
