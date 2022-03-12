import styled from "@emotion/styled";
import { colors } from "../../styles/variables";
interface SectionTitleStyleProps {
  marginBottom?: number;
}

interface StickyNoteStyleProps {
  rotate: number;
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
  marginBottom: "14px",
});

const CardContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "28px",
});

const StickyNote = styled.div<StickyNoteStyleProps>( props => ({
  height: "100px",
  width: "100px",
  position: "relative",
  marginBottom: "30px",
  marginRight: "14px",
  transform: `rotate(${props.rotate}deg)`,
}));

const StickyNoteLabel = styled.caption({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const StickyNoteContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
});

export const Styled = {
  Section,
  SectionTitle,
  SectionParagraph,
  StickyNote,
  CardContainer,
  StickyNoteLabel,
  StickyNoteContainer,
};
