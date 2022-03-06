import Card, { ICard } from "./Card";
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
  paragraph?: string;
  cardSection?: ICardSection;
  keywordSection?: IKeywordSection;
}

const Section: React.FC<SectionProps> = ({
  title,
  paragraph,
  cardSection,
  keywordSection,
}) => {
  const colorIndex = cardSection?.flipColor ? 2 : 1

  return (
    <Styled.Section>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      {paragraph && (
        <Styled.SectionParagraph>{paragraph}</Styled.SectionParagraph>
      )}
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
    </Styled.Section>
  );
};

export default Section;
