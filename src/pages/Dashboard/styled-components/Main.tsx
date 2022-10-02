import styled from 'styled-components';
import { Background } from '@/assets/';

interface Props {
  $quest: boolean;
}

export const Main = styled.main<Props>`
  display: grid;
  justify-content: center;
  /*  grid-template-areas: 'quest' 'options'; */
  grid-template-areas: 'mustachy' 'quest' 'options';
  row-gap: 1em;
  min-height: 100vh;
  background-image: url(${Background}), linear-gradient(90deg, #181818 9%, #181818 100%);
  background-size: 120% 120%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 2em;
  padding-bottom: 1em;
  align-items: center;
  /*  ${({ $quest }) => ($quest ? 'grid-template-columns: 5fr 3fr' : null)}; */

  @media only screen and (min-width: 700px) {
    grid-template-columns: minmax(30em, 50vmax) auto;
    grid-template-areas: 'mustachy quest' 'options quest';
  }
`;
