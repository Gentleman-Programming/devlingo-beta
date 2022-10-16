import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useSeniority } from '@/hooks';
import { Icon, Layout } from '@/components';
import { ICategory } from '@/models';
import { Main } from '@/pages/Dashboard/styled-components';
import { css, html, javascript } from '@/assets';
import { MustachyWithDialog } from '../Dashboard';

const Results = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { seniorities } = useSeniority();
  const { pts, initialValue, ...techs } = seniorities;

  const categories = Object.keys(techs);

  const icon = {
    JavaScript: javascript,
    css: css,
    Html5: html,
    global: '',
  };

  const Technology = styled.h2`
    color: #fff;
    display: inline-flex;
    align-items: center;
    column-gap: 1ch;
    font-size: 1.2rem;
  `;

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    grid-column: 1 / 3;
    text-transform: uppercase;
  `;

  return (
    <Layout>
      <Main $quest={viewportWidth > 700}>
        <MustachyWithDialog>{`Eres ${seniorities.global}`}</MustachyWithDialog>
        <Container>
          {categories.map((category) => {
            return (
              category !== 'global' && (
                <Technology key={category}>
                  <Icon icon={icon[category as keyof typeof seniorities]} />
                  <b>{category}</b> : {(seniorities[category as keyof typeof seniorities] as ICategory).txt}
                </Technology>
              )
            );
          })}
        </Container>
      </Main>
    </Layout>
  );
};

export default Results;
