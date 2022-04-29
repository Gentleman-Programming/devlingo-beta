import styled from 'styled-components';
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
