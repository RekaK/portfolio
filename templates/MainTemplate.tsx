import Hero, { HeroProps } from "../components/hero";
import { Styled } from "./MainTemplate.styles";

interface MainTemplateProps {
  hero: HeroProps;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, hero }) => {
  const { image, title, subtitle, spelling } = hero;
  return (
    <Styled.MainTemplate>
      <Hero
        image={image}
        title={title}
        subtitle={subtitle}
        spelling={spelling}
      />
      {children}
    </Styled.MainTemplate>
  );
};

export default MainTemplate;
