import Nav from "../nav";
import { Styled } from "./Hero.styles";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  spelling: string;
}

const Hero = () => {
  return (
    <Styled.HeroContainer>
      <Nav />
      <Styled.HeroSection>
        <Styled.DummyImage></Styled.DummyImage>
        <Styled.HeroTitleContainer>
          <Styled.HeroTitleBlock>

          <Styled.HeroTitle>Réka</Styled.HeroTitle>
          <Styled.HeroSpelling>(‘ray-kuh)</Styled.HeroSpelling>
          </Styled.HeroTitleBlock>
          <Styled.HeroSubtitle>
            Friendly neighborhood UX wizard
          </Styled.HeroSubtitle>
        </Styled.HeroTitleContainer>
      </Styled.HeroSection>
    </Styled.HeroContainer>
  );
};

export default Hero;
