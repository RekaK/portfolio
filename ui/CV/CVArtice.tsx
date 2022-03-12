import { Styled } from "./styles/CVSection.Styles";

export interface ICvArticle {
  articleTitle: string;
  paragraphs: string[];
  date?: string;
}

interface ArticleProps {
  articleTitle: string;
  paragraphs: string[];
  date?: string;
}

const CVArticle: React.FC<ArticleProps> = ({
  date,
  articleTitle,
  paragraphs,
}) => {
  return (
    <>
      {date && <Styled.CVDate>{date}</Styled.CVDate>}
      <Styled.CVArticleTitle>{articleTitle}</Styled.CVArticleTitle>
      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <Styled.CVParagraph key={index}>{paragraph}</Styled.CVParagraph>
        ))}
    </>
  );
};

export default CVArticle;
