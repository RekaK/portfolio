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
  marginTop: "40px",
});

const ProjectFooter = styled.footer({
  width: "100%",
  height: "44px",
  backgroundColor: colors.pink,
});

const TitleContainer = styled.header({
  marginBottom: "80px",
});

const ProjectTitle = styled.h1({
  textAlign: "center",
  fontFamily: "Bebas Neue, sans-serif",
  fontSize: "60px",
  lineHeight: "72px",
  letterSpacing: "6%",
  fontWeight: 400,
  color: colors.darkBlue,
  marginBottom: "8px",
});

const SubtitleItem = styled.div({});

const Subtitle = styled.span({});

export const Styled = {
  ProjectTemplate,
  Main,
  MainContainer,
  BackButtonContainer,
  ProjectFooter,
  ProjectTitle,
  TitleContainer,
  SubtitleItem,
  Subtitle,
};
