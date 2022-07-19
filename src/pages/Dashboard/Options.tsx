import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button } from '@/components/';
import { IResponse } from '@/models';
import { useQuestions } from '@/hooks';

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

export function Options({ options, index, id, points }: props) {
  const { seniority, initialState, DecrementSeniority } = useQuestions();
  const navigate = useNavigate();
  const handleClick =
    ({ isCorrect }: IResponse) =>
    () => {
      const nextQuestion = +index + 1;
      if (nextQuestion !== 13) {
        if (!isCorrect) {
          points !== 50 ? DecrementSeniority(30 - points) : DecrementSeniority(10);
        }
        navigate(`/question/${nextQuestion}`);
      } else {
        navigate('/');
      }
    };

  return (
    <OptionsContainer>
      <div key={id}>
        <h2>puntaje inicial: {initialState}</h2>
        <h2>puntaje actual: {seniority}</h2>
        {options.map((option: IResponse) => (
          <Button onClick={handleClick(option)}>{option.text}</Button>
        ))}
      </div>
    </OptionsContainer>
  );
}
