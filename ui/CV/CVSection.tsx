import { Styled } from "./styles/CVSection.Styles";

interface SectionProps {
  title: string;
}

const CVSection: React.FC<SectionProps> = ({ title }) => {
  return (
    <Styled.CVSection>
      <Styled.CVSectionTitle>{title}</Styled.CVSectionTitle>
    </Styled.CVSection>
  );
};

export default CVSection;
