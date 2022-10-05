import { useState, useEffect } from 'react';

import { useSeniority } from '@/hooks';
import { Main } from '@/pages/Dashboard/styled-components';
import { Layout } from '@/components';

const Results = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { seniorities } = useSeniority();
  const categories = Object.keys(seniorities);

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
        <h1 style={{ color: '#fff', fontSize: '3em', textAlign: 'center' }}>Eres {seniorities.global}</h1>
        {categories.map((category) => {
          if (category === 'global') return null;

          return (
            <h2>
              <b>{category}</b>: {seniorities[category]?.txt}
            </h2>
          );
        })}
      </Main>
    </Layout>
  );
};

export default Results;
