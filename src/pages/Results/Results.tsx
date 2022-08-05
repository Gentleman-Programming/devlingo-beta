import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { Main } from '@/pages/Dashboard/styled-components';

import { Layout } from '@/components';

const Results = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const location = useLocation();

  const data = location.state as string;

  return (
    <Layout>
      <Main $quest={viewportWidth > 700}>
        <h1 style={{ color: '#fff', fontSize: '3em', textAlign: 'center' }}>Eres {data}</h1>
      </Main>
    </Layout>
  );
};

export default Results;
