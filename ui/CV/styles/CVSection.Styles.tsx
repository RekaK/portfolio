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

const CVArticleTitle = styled.h4({
  position: "relative",
  display: "inline-block",
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  color: colors.darkBlue,
  lineHeight: "24.5px",
  "&::before": {
    position: "absolute",
    content: "''",
    width: "calc(100% + 4px)",
    top: 0,
    bottom: "5px",
    zIndex: -1,
    backgroundColor: colors.lightBlue,
  },
});

const CVDate = styled.p({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "14px",
  lineHeight: "19px",
  marginBottom: "8px",
});

const CVListColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  marginRight: "80px",
});

const CVListContainer = styled.div({
  display: "flex",
  flexDirection: "row",
});

const CVListTitle = styled.h5({
  position: "relative",
  display: "inline-block",
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 600,
  fontSize: "18px",
  color: colors.darkBlue,
  lineHeight: "24.5px",
  width: "140px",
  "&::before": {
    position: "absolute",
    content: "''",
    width: "calc(100% + 4px)",
    top: 0,
    bottom: "5px",
    zIndex: -1,
    backgroundColor: colors.lightBlue,
  },
});

const CVList = styled.ul({
  paddingLeft: 0,
  listStyle: "none",
});

const CVListElement = styled.li({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "14px",
  lineHeight: "22.50px",
  marginBottom: "8px",
});

export const Styled = {
  CVSection,
  CVParagraph,
  CVSectionTitle,
  CVArticleTitle,
  CVDate,
  CVList,
  CVListContainer,
  CVListTitle,
  CVListColumn,
  CVListElement,
};
