import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background } from '@/assets/';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${Background}), linear-gradient(90deg, #181818 9%, #181818 100%);
  background-size: 120% 120%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-areas: 'mustachy quest' 'options quest';
`;

export const Globo = styled.div`
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
    border-top: 2vw solid transparent;
    border-right: 3vw solid #fff;
    border-bottom: 2vw solid transparent;
    left: 20%;
    bottom: 0;
    transform: rotate(70deg);
    z-index: -1;
  }
`;

export const HeroButtons = styled(Link)<{ primary?: string }>`
  padding: 0.5ch 1ch;
  border: 0.3ch solid #ea1889;
  border-radius: 0.5ch;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration-line: none;
  box-shadow: 0 1ch #a11360;
  background-color: ${(props) => (props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (props.primary ? '#fff' : '#EA1889')};
  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export const Button = styled.button<{ primary?: string }>`
  font-size: inherit;
  font-weight: bold;
  text-decoration-line: none;
  padding: 0.5ch 1ch;
  border-radius: 0.5ch;
  box-shadow: 0 1ch #a11360;
  text-transform: uppercase;
  border: 0.3ch solid #ea1889;
  background-color: ${(props) => (!props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (!props.primary ? '#fff' : '#EA1889')};
  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  grid-area: options;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  & > * {
    flex-basis: 40%;
  }
`;

export const FloatingButton = styled(Button)`
  position: fixed;
  bottom: 2em;
  right: 2em;
`;

export const CodeContainer = styled.div`
  grid-area: quest;
  font-size: 1rem;
  overflow: hidden;
  border: 1em;
`;
