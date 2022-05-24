import { Header, HeaderContainer } from './styled-components';
import { Wrapper } from '@/styled-components';

export default function TopBar() {
  return (
    <Header>
      <Wrapper>
        <HeaderContainer>
          <h1>Control Panel</h1>
        </HeaderContainer>
      </Wrapper>
    </Header>
  );
}

export { TopBar };
