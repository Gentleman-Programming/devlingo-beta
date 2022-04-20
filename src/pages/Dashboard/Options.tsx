import { Button, OptionsContainer } from './styled-components/dashboard.styled.components';

import { option } from '@/models';

export function Options({ options }: { options: Array<option> }) {
  return (
    <OptionsContainer>
      {options.map(({ option }) => (
        <Button>{option}</Button>
      ))}
    </OptionsContainer>
  );
}
