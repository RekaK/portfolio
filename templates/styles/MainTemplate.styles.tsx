import styled from "@emotion/styled";

const MainTemplate = styled.body({
  display: "flex",
});

const Main = styled.main({
  width: "50vw",
  height: "100vh",
  overflow: "scroll",
});

const MainContainer = styled.div({
  margin: "60px 80px",
});

const BackButtonContainer = styled.div({
  marginBottom: "40px",
});

export const Styled = {
  MainTemplate,
  Main,
  MainContainer,
  BackButtonContainer,
};
