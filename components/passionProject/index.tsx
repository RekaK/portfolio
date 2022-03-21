import { useRouter } from "next/router";
import { Styled } from "../../templates/styles/MainTemplate.styles";
import Button from "../../ui/Buttons/Button";
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
  const router = useRouter();

  return (
    <Styled.Main>
      <Styled.MainContainer>
        <Styled.BackButtonContainer>
          <Button
            label="back"
            onClick={() => router.back()}
            iconUrl={"/icons/backArrow.png"}
          />
        </Styled.BackButtonContainer>
        <Section
          title={mainSection.title}
          paragraphs={mainSection.paragraphs}
        />
        <ImageGrid
          images={imageGallery}
          // dimensions={{ height: 166, width: 265 }}
        />
        <Footer />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default PassionProjectContent;
