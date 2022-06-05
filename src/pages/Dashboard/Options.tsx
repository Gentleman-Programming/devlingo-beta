import { Button } from '@/components/';

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
  display: grid;
  grid-area: options;
  row-gap: 1em;
  align-items: center;

  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(30em, 1fr));
    grid-template-rows: min-content min-content;
  }
`;
