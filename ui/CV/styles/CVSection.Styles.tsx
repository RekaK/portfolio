import styled from "@emotion/styled";
import { colors } from "../../../styles/variables";

interface SectionTitleStyleProps {
  marginBottom?: number;
}

const CVSection = styled.section({
  marginBottom: "40px",
  maxWidth: "560px",
});

const CVSectionTitle = styled.h3<SectionTitleStyleProps>((props) => ({
  fontFamily: "Bebas Neue",
  color: colors.darkBlue,
  fontWeight: 400,
  fontSize: "28px",
  letterSpacing: "6%",
  lineHeight: "33.6px",
  marginBottom: props.marginBottom ? `${props.marginBottom}px` : "20px",
}));

const CVParagraph = styled.p({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "14px",
  lineHeight: "22.50px",
  marginBottom: "14px",
});

export const Styled = {
  CVSection,
  CVParagraph,
  CVSectionTitle,
};
