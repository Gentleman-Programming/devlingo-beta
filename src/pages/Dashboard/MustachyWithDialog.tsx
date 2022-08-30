import styled from 'styled-components';
import { Mustachy } from '@/pages/Dashboard/Mustachy';

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: '. dialog' 'mustachy .';
  grid-area: mustachy;
  height: min-content;

  & > :last-child {
    grid-area: dialog;
    isolation: isolate;
    z-index: 200;
  }

  & > :first-child {
    grid-area: mustachy;
    transform: translateX(25%);
  }
`;

const Globo = styled.div`
  display: inline-flex;
  align-items: center;
  padding-inline: 1em;
  border-radius: 75%;
  aspect-ratio: 310 / 170;
  position: relative;
  justify-content: center;
  font-family: 'Ubuntu Mono';
  background-color: #fff;
  font-size: 2vmax;
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

export default function MustachyWithDialog({ children, dialogWidth }: { children: string; width?: string; dialogWidth?: string }) {
  return (
    <Container>
      <Mustachy />
      <Globo style={{ width: dialogWidth, aspectRatio: '525 / 366' }}>{children}</Globo>
    </Container>
  );
}
