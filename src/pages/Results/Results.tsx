import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Main } from '@/pages/Dashboard/styled-components';
import { Layout } from '@/components';
import { FirebaseUser } from '@/models';

type prop = {
  user: FirebaseUser;
};

const Results = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { seniorityGlobal } = useSelector(({ user }: prop) => user);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Layout>
      <Main $quest={viewportWidth > 700}>
        <h1 style={{ color: '#fff', fontSize: '3em', textAlign: 'center' }}>Eres {seniorityGlobal}</h1>
      </Main>
    </Layout>
  );
};

export default Results;
