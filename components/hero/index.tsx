import Image from "next/image";
import Nav from "../nav";
import { Styled } from "./Hero.styles";

export interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  spelling?: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle, spelling }) => {
  return (
    <Styled.HeroContainer>
      <Nav />
      <Styled.HeroSection>
        <Image
          src={image}
          layout="fixed"
          objectFit="contain"
          alt="image"
          height={300}
          width={240}
        />
        <Styled.HeroTitleContainer>
          <Styled.HeroTitleBlock>
            <Styled.HeroTitle>{title}</Styled.HeroTitle>
            {spelling && <Styled.HeroSpelling>{spelling}</Styled.HeroSpelling>}
          </Styled.HeroTitleBlock>
          {subtitle && <Styled.HeroSubtitle>{subtitle}</Styled.HeroSubtitle>}
        </Styled.HeroTitleContainer>
      </Styled.HeroSection>
    </Styled.HeroContainer>
  );
};

export default Hero;
