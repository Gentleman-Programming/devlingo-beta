import { Button } from '@/components/';
import { IResponse } from '@/models';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

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

export function Options({ options, id, index }: { options: IResponse[]; id: string; index: number }) {
  const navigate = useNavigate();
  const handleClick =
    ({ isCorrect }: IResponse) =>
    () => {
      const nextQuestion = +index + 1;
      if (nextQuestion === 13) navigate('/');
      else navigate(`/question/${nextQuestion}`);
    };
  return (
    <OptionsContainer>
      <div key={id}>
        {options.map((option: IResponse) => (
          <Button onClick={handleClick(option)}>{option.text}</Button>
        ))}
      </div>
    </OptionsContainer>
  );
}
