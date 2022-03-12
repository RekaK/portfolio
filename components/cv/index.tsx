import { Styled } from "../../templates/MainTemplate.styles";
import { ICvArticle } from "../../ui/CV/CVArtice";
import CVSection from "../../ui/CV/CVSection";

const timeLineArticles: ICvArticle[] = [
  {
    date: "",
    articleTitle: "",
    paragraphs: [""],
  },
];

const CVContent = () => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <CVSection title="Timeline" />
        <CVSection title="Qualifications" />
        <CVSection title="Working Knowledge" />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default CVContent;
