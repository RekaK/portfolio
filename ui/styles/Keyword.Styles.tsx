import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

interface KeywordStyleProps {
  color: "blue" | "pink";
}

const Keyword = styled.span<KeywordStyleProps>((props) => ({
  display: "inline-block",
  padding: "2px 6px",
  backgroundColor: props.color === "blue" ? colors.lightBlue : colors.pink,
  fontFamily: "Source Code Pro, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "14px",
  lineHeight: "17.6px",
  marginBottom: "6px"
}));

const KeywordSection = styled.div({
  display: "flex",
  flexDirection: "row",
  "& span": {
    marginRight: "8px",
  },
  flexWrap: "wrap"
});

export const Styled = {
  Keyword,
  KeywordSection,
};
