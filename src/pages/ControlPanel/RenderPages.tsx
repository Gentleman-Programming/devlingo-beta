import { Wrapper } from '@/styled-components';
import { Main } from './styled-components';
import { Render } from '@/contexts';
import { useContext, lazy } from 'react';

// render section
const Question = lazy(() => import('@/pages/ControlPanel/Question'));

const style = {
  color: '#fff',
};

export default function RenderPages() {
  const { render } = useContext(Render);

  return (
    <>
      <Main>
        <Wrapper>
          {render === 'Questions' ? <Question /> : false}
          {render === 'Users' ? <h1 style={style}>Users</h1> : false}
          {render === 'Roles' ? <h1 style={style}>Roles</h1> : false}
        </Wrapper>
      </Main>
    </>
  );
}

export { RenderPages };
