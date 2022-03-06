import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

interface SectionTitleStyleProps {
  marginBottom?: number;
}

const Section = styled.section({
  marginBottom: "40px",
  maxWidth: "560px",
});

const SectionTitle = styled.h3<SectionTitleStyleProps>((props) => ({
  fontFamily: "Bebas Neue",
  color: colors.darkBlue,
  fontWeight: 400,
  fontSize: "28px",
  letterSpacing: "6%",
  lineHeight: "33.6px",
  marginBottom: props.marginBottom ? `${props.marginBottom}px` : "20px",
}));

const SectionParagraph = styled.p({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "14px",
  lineHeight: "22.50px",
});

const CardContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "28px"
});

export const Styled = {
  Section,
  SectionTitle,
  SectionParagraph,
  CardContainer,
};