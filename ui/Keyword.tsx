import { Styled } from "./styles/Keyword.Styles";

interface KeywordProps {
  color: "blue" | "pink";
  text: string;
}

const Keyword: React.FC<KeywordProps> = ({ color, text }) => {
  return <Styled.Keyword color={color}>{text}</Styled.Keyword>;
};

export default Keyword;
