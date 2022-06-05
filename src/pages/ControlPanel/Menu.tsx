import { Aside, AsideContainer, Button } from './styled-components';
import { Wrapper } from '@/styled-components';
import { Mustachy } from '@/pages/Dashboard/Mustachy';
import { Render } from '@/contexts';
import { useContext } from 'react';

export default function Menu() {
  const { handleClick } = useContext(Render);

  return (
    <Aside>
      <Wrapper>
        <Mustachy width="12vmin" />
        <AsideContainer>
          <Button onClick={handleClick}>Questions</Button>
          <Button onClick={handleClick}>Users</Button>
          <Button onClick={handleClick}>Roles</Button>
        </AsideContainer>
      </Wrapper>
    </Aside>
  );
}

export { Menu };
