import { Button } from './styled-components';

import { option } from '@/models';
import styled from 'styled-components';

export function Options({ options }: { options: Array<option> }) {
  return (
    <OptionsContainer>
      {options.map((element, index) => (
        <Button key={index}>{element.option}</Button>
      ))}
    </OptionsContainer>
  );
}

export const OptionsContainer = styled.div`
  display: flex;
  grid-area: options;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  & > * {
    flex-basis: 40%;
  }
`;
