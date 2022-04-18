import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background } from '@/assets';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: 120% 120%;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${Background}), linear-gradient(90deg, #181818 9%, #181818 100%);
`;

export const GloboCointainer = styled.div`
  position: relative;
  width: 35%;
  margin-top: -20vh;
`;

export const Globo = styled.div`
  padding: 6vw 5vw;
  width: 100%;
  border-radius: 50%;
  background-color: #fff;
  font-size: 2vw;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 2vw solid transparent;
    border-right: 3vw solid #fff;
    border-bottom: 2vw solid transparent;
    left: 20%;
    bottom: 0;
    transform: rotate(70deg);
  }
`;

export const HeroButtons = styled(Link)<{ primary?: string }>`
  font-weight: bold;
  position: absolute;
  bottom: 5%;
  right: 2%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 1.5vw 0;
  border-radius: 1vw;
  transition: all 0.5s ease 0s;
  box-shadow: 0 1vw #a11360;
  text-transform: uppercase;
  font-size: 1.5vw;
  border: 0.3vw solid #ea1889;

  background-color: ${(props) => (props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (props.primary ? '#fff' : '#EA1889')};

  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;
