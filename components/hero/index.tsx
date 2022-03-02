import Nav from "../nav";
import { Styled } from "./Hero.styles";

interface HeroProps {
  image: string;
}

const Hero = () => {
  return (
    <Styled.HeroContainer>
      <Nav />
      <section>Hero</section>
    </Styled.HeroContainer>
  );
};

export default Hero;
