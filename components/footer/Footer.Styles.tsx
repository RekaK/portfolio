import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const Footer = styled.footer({
  marginTop: "88px",
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

const FooterImageContainer = styled.div({
  marginBottom: "8px",
});

const FooterParagraph = styled.p({
  fontFamily: "Source Code Pro, serif",
  fontSize: "14px",
  fontWeight: 400,
  color: colors.darkBlue,
  marginBottom: "8px",
});

export const Styled = {
  Footer,
  FooterImageContainer,
  FooterParagraph,
};
