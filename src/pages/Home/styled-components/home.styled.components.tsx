import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const ParagraphVerticalAlign = styled(Link)`
  display: flex;
  font-family: Inter;
  align-items: center;
  font-size: 2.3vw;
  color: white;
  text-decoration: none;
  z-index: 1;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeroButtons = styled(Link)<{ primary?: string }>`
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43%;
  padding: 1.5vw 0;
  border-radius: 1vw;
  transition: all 0.5s ease 0s;
  box-shadow: 0 1vw #a11360;
  text-transform: uppercase;
  font-size: 1.5vw;
  border: 0.3vw solid #ea1889;

  background-color: ${(props:any) => (props.primary ? '#EA1889' : '#181818;')};
  color: ${(props:any) => (props.primary ? '#fff' : '#EA1889')};

  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export const TitleHome = styled.h1`
  font-family: Inter;
  font-size: 3vw;
  z-index: 1;
`;

export const Hero = styled.main`
  display: flex;
  background-color: #181818;
  justify-content: center;
  gap: 3%;
  align-items: center;
  height: 90vh;
`;

export const ImageHero = styled.img`
  width: 25%;
  z-index: 1;
`;

export const DivHero = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const TextHero = styled.h2`
  font-family: Inter;
  color: white;
  font-size: 5vw;
`;

export const DivButtons = styled.div`
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  gap: 5%;
`;

export const SecondSection = styled.section`
  background-color: #181818;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

export const ImageSection = styled.img`
  width: 35%;
`;

export const TextSection = styled.h3`
  font-family: Inter;
  color: white;
  font-size: 5vw;
`;

export const HeroBubbleImg = styled.img`
  width: 100%;
`;

export const HeroBubble1 = styled(Parallax)`
  width: 30%;
  position: absolute;
  z-index: 0;
  left: -10%;
  top: -25%;
`;

export const HeroBubble2 = styled(Parallax)`
  width: 10%;
  position: absolute;
  z-index: 0;
  right: 65%;
  top: 20%;
`;

export const HeroBubble3 = styled(Parallax)`
  width: 10%;
  position: absolute;
  z-index: 0;
  right: 35%;
  top: 5%;
`;

export const HeroBubble4 = styled(Parallax)`
  width: 30%;
  position: absolute;
  z-index: 0;
  right: -10%;
  top: -20%;
`;

export const HeroBubble5 = styled(Parallax)`
  width: 5%;
  position: absolute;
  z-index: 0;
  right: 8%;
  top: 25%;
`;

export const HeroBubble6 = styled(Parallax)`
  width: 5%;
  position: absolute;
  z-index: 0;
  right: 65%;
  bottom: 5%;
`;

export const MiddleBubble1 = styled(Parallax)`
  width: 35%;
  position: absolute;
  z-index: 0;
  left: -10%;
  bottom: -50%;
`;

export const MiddleBubble2 = styled(Parallax)`
  width: 16%;
  position: absolute;
  z-index: 0;
  left: 8%;
  bottom: -60%;
`;

export const MiddleBubble3 = styled(Parallax)`
  width: 20%;
  position: absolute;
  z-index: 0;
  right: 0%;
  bottom: -50%;
`;
