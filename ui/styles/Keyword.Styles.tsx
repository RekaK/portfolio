import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

interface KeywordStyleProps {
  color: "blue" | "pink";
}

const Keyword = styled.span<KeywordStyleProps>(props => ({
  display: "inline-block",
  padding: "2px 6px",
  backgroundColor: props.color === "blue" ? colors.lightBlue : colors.pink,
}));

const KeywordSection = styled.div({
  display: "flex", 
  flexDirection: "row",
  "& span": {
    marginRight: "8px"
  }
});

export const Styled = {
  Keyword,
  KeywordSection,
};
