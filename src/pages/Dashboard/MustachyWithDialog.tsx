import styled from 'styled-components';
import { Mustachy } from '@/pages/Dashboard/Mustachy';
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

const Globo = styled.div`
  display: inline-flex;
  align-items: center;
  padding-inline: 1em;
  border-radius: 75%;
  aspect-ratio: 310 / 170;
  position: relative;
  text-align: center;
  font-family: 'Ubuntu Mono';
  background-color: #fff;

  &:before {
    content: '';
    position: absolute;
    border-top: 2em solid transparent;
    border-right: 3em solid #fff;
    border-bottom: 2em solid transparent;
    left: 20%;
    bottom: 0;
    transform: rotate(70deg);
    z-index: -1;
  }
`;

export default function MustachyWithDialog({
  children,
  width,
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
