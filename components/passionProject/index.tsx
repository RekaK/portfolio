import { Styled } from "../../templates/MainTemplate.styles";
import Section from "../../ui/Section";

interface PassionProjectContentProps {
  mainSection: {
    title: string;
    paragraphs: string[];
  };
  imageGallery: string[];
  buttonSection?: {
    url: string;
    note: string;
  };
}

const PassionProjectContent: React.FC<PassionProjectContentProps> = ({
  mainSection,
  imageGallery,
  buttonSection,
}) => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <Section
          title={mainSection.title}
          paragraphs={mainSection.paragraphs}
        />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default PassionProjectContent;
