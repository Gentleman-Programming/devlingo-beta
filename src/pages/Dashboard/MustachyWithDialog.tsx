import styled from 'styled-components';
import { Mustachy } from '@/pages/Dashboard/Mustachy';
import { Globo } from './styled-components/dashboard.styled.components';
import { CSSProperties } from 'react';

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: '. dialog' 'mustachy .';
  & > :last-child {
    grid-area: dialog;
    transform: translateX(-25%);
  }
  & > :first-child {
    grid-area: mustachy;
  }
`;

export default function MustachyWithDialog({
  children,
  width = '20ch',
  style,
  dialogWidth
}: {
  children: string;
  width?: string;
  dialogWidth?: string;
  style?: CSSProperties;
}) {
  return (
    <Container style={style}>
      <Mustachy width={width} />
      <Globo style={{ width: dialogWidth, aspectRatio: '525 / 366', fontSize: '2.25rem' }}>{children}</Globo>
    </Container>
  );
}
