import { Styled } from "../../templates/MainTemplate.styles";
import ImageGrid, { IImageObject } from "../../ui/ImageGrid";
import Section from "../../ui/Section";
import Footer from "../footer";

interface PassionProjectContentProps {
  mainSection: {
    title: string;
    paragraphs: string[];
  };
  imageGallery: IImageObject[];
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
        <ImageGrid
          images={imageGallery}
          dimensions={{ height: 166, width: 265 }}
        />
        <Footer />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default PassionProjectContent;
