import { Wrapper } from '@/styled-components';
import { Main } from './styled-components';
import { Render } from '@/contexts';
import { useContext } from 'react';
import { Question } from '@/pages/ControlPanel/';

const style = {
  color: '#fff',
};

export default function RenderPages() {
  const { render } = useContext(Render);

  return (
    <>
      <Main>
        <Wrapper>
          {render === 'Questions' && <Question />}
          {render === 'Users' && <h1 style={style}>Users</h1>}
          {render === 'Roles' && <h1 style={style}>Roles</h1>}
        </Wrapper>
      </Main>
    </>
  );
}

export { RenderPages };
