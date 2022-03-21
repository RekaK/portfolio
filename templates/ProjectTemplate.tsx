import { useRouter } from "next/router";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Button from "../ui/Buttons/Button";
import { Styled } from "./styles/ProjectTemplate.styles";

const ProjectTemplate: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <Styled.Main>
      <Nav />
      <Styled.MainContainer>
        <Styled.BackButtonContainer>
          {" "}
          <Button
            label="back"
            onClick={() => router.back()}
            iconUrl={"/icons/backArrow.png"}
          />
        </Styled.BackButtonContainer>
        {children}
        <div>
          {" "}
          <Button
            label="back to top"
            onClick={() => {
              return;
            }}
          />
        </div>
      </Styled.MainContainer>
      <Styled.ProjectFooter />
    </Styled.Main>
  );
};

export default ProjectTemplate;
