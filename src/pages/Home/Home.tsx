import { LayoutContainer, Navbar } from '@/styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import LanguageIcon from '@mui/icons-material/Language';
import {
  ParagraphVerticalAlign,
  TitleHome,
  Hero,
  ImageHero,
  DivHero,
  TextHero,
  HeroButtons,
  DivButtons,
  SecondSection,
  ImageSection,
  TextSection,
  HeroBubbleImg,
  HeroBubble1,
  HeroBubble2,
  HeroBubble3,
  HeroBubble4,
  HeroBubble5,
  HeroBubble6,
  MiddleBubble1,
  MiddleBubble2,
  MiddleBubble3
} from './styled-components/home.styled.components';

import {
  MustachiLogo,
  MustachiFlag,
  BubbleHero1,
  BubbleHero2,
  BubbleHero3,
  BubbleHero4,
  BubbleHero5,
  BubbleHero6,
  BubbleMiddle1
} from '../../assets';

export const Home = () => {
  return (
    <ParallaxProvider>
      <HeroBubble1 translateY={['-1%', '1%']} speed={-10}>
        <HeroBubbleImg src={BubbleHero1} />
      </HeroBubble1>

      <HeroBubble2 translateY={['100%', '-100%']} speed={10}>
        <HeroBubbleImg src={BubbleHero2} />
      </HeroBubble2>

      <HeroBubble3 translateY={['100%', '-100%']} speed={-10}>
        <HeroBubbleImg src={BubbleHero3} />
      </HeroBubble3>

      <HeroBubble4 translateY={['-1%', '1%']} speed={10}>
        <HeroBubbleImg src={BubbleHero4} />
      </HeroBubble4>

      <HeroBubble5 translateY={['100%', '-100%']} speed={-10}>
        <HeroBubbleImg src={BubbleHero5} />
      </HeroBubble5>

      <HeroBubble6 translateY={['100%', '-100%']} speed={10}>
        <HeroBubbleImg src={BubbleHero6} />
      </HeroBubble6>

      <Navbar>
        <TitleHome>Devlingo</TitleHome>
        <ParagraphVerticalAlign to="/dashboard">
          <LanguageIcon sx={{ fontSize: '2.3vw' }} /> English
        </ParagraphVerticalAlign>
      </Navbar>

      <Hero>
        <ImageHero src={MustachiLogo} />

        <DivHero>
          <TextHero>¡Una forma didactica, divertida y gratuita de aprender a programar!</TextHero>
          <DivButtons>
            <HeroButtons to="/dashboard" primary="true">
              Empezar
            </HeroButtons>
            <HeroButtons to="/dashboard">Ya Tengo Cuenta</HeroButtons>
          </DivButtons>
        </DivHero>
      </Hero>

      <MiddleBubble1 translateY={['-10%', '10%']} speed={10}>
        <HeroBubbleImg src={BubbleMiddle1} />
      </MiddleBubble1>

      <MiddleBubble2 translateY={['100%', '-100%']} speed={-10}>
        <HeroBubbleImg src={BubbleMiddle1} />
      </MiddleBubble2>

      <MiddleBubble3 translateY={['100%', '-100%']} speed={10}>
        <HeroBubbleImg src={BubbleMiddle1} />
      </MiddleBubble3>

      <SecondSection>
        <ImageSection src={MustachiFlag} />
        <TextSection>
          Te encantará <br /> aprender con Devlingo
        </TextSection>
      </SecondSection>
    </ParallaxProvider>
  );
};

export default Home;
