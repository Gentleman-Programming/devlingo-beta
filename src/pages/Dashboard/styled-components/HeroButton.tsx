import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
