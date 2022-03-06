import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const HeroContainer = styled.div({
  width: "50vw",
  height: "100vh",
  backgroundColor: colors.pink,
});

const HeroSection = styled.section({
  paddingLeft: "48px",
  marginTop: "20vh",
  display: "flex",
  flexDirection: "row",
});

const DummyImage = styled.div({
  width: "230px",
  height: "230px",
  border: `1px solid #ccc`,
});

const HeroTitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const HeroTitle = styled.h1({
  display: "block",
  fontFamily: "Bebas Neue, sans-serif",
  color: colors.darkBlue,
  fontSize: "80px",
  fontWeight: 400,
  lineHeight: "80px",
});

const HeroSubtitle = styled.h2({
  color: colors.darkBlue,
  fontFamily: "Source Code Pro, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  marginTop: "-12px"
});

const HeroTitleBlock = styled.div({
  display: "flex",
  alignItems: "flex-end"
});

const HeroSpelling = styled.span({
  display: "inline-block",
  fontFamily: "Source Code Pro, sans-serif",
  color: colors.darkBlue,
  fontSize: "22px",
  paddingBottom: "14px"
});

export const Styled = {
  HeroContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroSpelling,
  HeroTitleBlock,
  HeroTitleContainer,
  DummyImage,
};
