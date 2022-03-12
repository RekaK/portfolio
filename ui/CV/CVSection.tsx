import CVArticle, { ICvArticle } from "./CVArtice";
import CVList, { ICVList } from "./CvList";
import { Styled } from "./styles/CVSection.Styles";

interface SectionProps {
  title: string;
  articles?: ICvArticle[];
  lists?: ICVList[];
}

const CVSection: React.FC<SectionProps> = ({ title, articles, lists }) => {
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
      {lists && <CVList listColumns={lists} />}
    </Styled.CVSection>
  );
};

export default CVSection;
