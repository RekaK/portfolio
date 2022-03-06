import { Styled } from "./styles/Section.Styles";

interface SectionProps {
  title: string;
  paragraph: string;
}

const Section: React.FC<SectionProps> = ({ title, paragraph }) => {
  return (
    <Styled.Section>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.SectionParagraph>{paragraph}</Styled.SectionParagraph>
    </Styled.Section>
  );
};

export default Section;
