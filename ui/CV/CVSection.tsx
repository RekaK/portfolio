import CVArticle, { ICvArticle } from "./CVArtice";
import { Styled } from "./styles/CVSection.Styles";

interface SectionProps {
  title: string;
  articles?: ICvArticle[];
}

const CVSection: React.FC<SectionProps> = ({ title, articles }) => {
  return (
    <Styled.CVSection>
      <Styled.CVSectionTitle>{title}</Styled.CVSectionTitle>
      {articles &&
        articles.map((article, index) => (
          <CVArticle
            key={index}
            articleTitle={article.articleTitle}
            paragraphs={article.paragraphs}
            date={article.date}
          />
        ))}
    </Styled.CVSection>
  );
};

export default CVSection;
