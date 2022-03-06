import Hero from "../components/hero";
import { Styled } from "./MainTemplate.styles"

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Styled.MainTemplate>
      <Hero />
      {children}
    </Styled.MainTemplate>
  );
};

export default MainTemplate;
