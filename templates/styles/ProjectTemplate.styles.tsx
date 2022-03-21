import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const ProjectTemplate = styled.body({
  display: "flex",
});

const Main = styled.main({
  width: "100vw",
  height: "100vh",
  overflow: "scroll",
});

const MainContainer = styled.div({
  margin: "60px 80px",
});

const BackButtonContainer = styled.div({
  margin: "40px 0",
});

const ProjectFooter = styled.footer({
  width: "100%",
  height: "44px",
  backgroundColor: colors.pink
});

export const Styled = {
  ProjectTemplate,
  Main,
  MainContainer,
  BackButtonContainer,
  ProjectFooter
};
