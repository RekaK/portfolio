import Card, { ICard } from "./Card";
import Image from "next/image";
import { Styled } from "./styles/Section.Styles";
import { Styled as StyledKeywords } from "./styles/Keyword.Styles";
import Keyword from "./Keyword";

export interface ICardSection {
  cardSize: "small" | "large";
  flipColor?: boolean;
  cards: ICard[];
}

export interface IKeywordSection {
  keywords: string[];
}

interface SectionProps {
  title: string;
  paragraphs?: string[];
  cardSection?: ICardSection;
  keywordSection?: IKeywordSection;
  stickyNotes?: string[];
  image?: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
}

const Section: React.FC<SectionProps> = ({
  title,
  paragraphs,
  cardSection,
  keywordSection,
  stickyNotes,
  image,
}) => {
  const colorIndex = cardSection?.flipColor ? 2 : 1;

  return (
    <Styled.Section>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <Styled.SectionParagraph key={index}>
            {paragraph}
          </Styled.SectionParagraph>
        ))}
      {cardSection && (
        <Styled.CardContainer>
          {cardSection.cards.map((card, index) => (
            <Card
              key={card.link}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              size={cardSection.cardSize}
              color={(index + colorIndex) % 2 === 0 ? "pink" : "blue"}
              link={card.link}
            />
          ))}
        </Styled.CardContainer>
      )}
      {stickyNotes && (
        <Styled.StickyNoteContainer>
          {stickyNotes.map((label) => (
            <Styled.StickyNote key={label} rotate={Math.random() * 10 - 5}>
              <Image
                src="/stickyNotes/stickyNote.png"
                alt="Sticky Note"
                height={100}
                width={100}
              />
              <Styled.StickyNoteLabel>{label}</Styled.StickyNoteLabel>
            </Styled.StickyNote>
          ))}
        </Styled.StickyNoteContainer>
      )}
      {keywordSection && (
        <StyledKeywords.KeywordSection>
          {keywordSection.keywords.map((keyword, index) => (
            <Keyword
              key={keyword}
              text={keyword}
              color={(index + 2) % 2 === 0 ? "pink" : "blue"}
            />
          ))}
        </StyledKeywords.KeywordSection>
      )}
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      )}
    </Styled.Section>
  );
};

export default Section;
