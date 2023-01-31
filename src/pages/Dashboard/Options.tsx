import { MouseEvent } from 'react';
import styled from 'styled-components';

import { useSeniority } from '@/hooks';
import { Button } from '@/components';
import { IResponse, Status } from '@/models';

interface StyledButtonProps {
  correct: boolean;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  --result: ${({ correct }) => (correct ? '#68ff2c' : '#f22')};

  &.active {
    background-color: var(--result);
  }
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-area: options;
  gap: 1.5em;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-template-rows: min-content min-content;
  }
`;

const Container = styled.span`
  display: grid;
  row-gap: 1em;
  align-items: center;
  color: #fff;
  margin-top: 1em;
  text-transform: uppercase;
  font-size: 1.7em;
  font-weight: 600;
  @media only screen and (min-width: 700px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

interface Props {
  options: IResponse[];
  id: string;
  index: number;
  points: number;
  handleSelect: ({ isCorrect }: IResponse) => void;
  state: Status;
}

export function Options({ options, handleSelect, state, id, points, index }: Props) {
  const { seniorities } = useSeniority();

  const onSelect = (e: MouseEvent<HTMLButtonElement>, option: IResponse, index: number) => {
    e.currentTarget.classList.add('active');

    handleSelect(option);
  };

  return (
    <div style={{ gridArea: 'options' }}>
      <div>
        <OptionsContainer>
          {options.map((option: IResponse, index) => (
            <StyledButton
              key={id + index}
              type="button"
              onClick={state === Status.Pending ? (e) => onSelect(e, option, index) : undefined}
              correct={option.isCorrect}
            >
              {option.text}
            </StyledButton>
          ))}
        </OptionsContainer>
      </div>
      <Container>{seniorities.global}</Container>
    </div>
  );
}
