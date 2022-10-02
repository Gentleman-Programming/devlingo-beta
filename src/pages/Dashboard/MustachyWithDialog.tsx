import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';

import { Mustachy } from '@/pages/Dashboard/Mustachy';
import { teclado } from '@/assets';

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
  padding-inline: 2em;
  border-radius: 75%;
  aspect-ratio: 310 / 170;
  position: relative;
  justify-content: center;
  font-family: 'Ubuntu Mono';
  background-color: #fff;
  font-size: 2vmax;
  width: calc(17ch + 10vmax);
  aspect-ratio: 525 / 366;

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

export default function MustachyWithDialog({ children }: { children: string }) {
  const audio = useRef<HTMLAudioElement>(null);

  return (
    <Container>
      <Mustachy />
      <audio ref={audio} loop src={teclado}></audio>
      <Globo>
        {[0].map(() => {
          return (
            <Typewriter
              key={children}
              words={[children]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={() => audio.current?.pause()}
              onType={() => audio.current?.play()}
            />
          );
        })}
      </Globo>
    </Container>
  );
}
