import Card, { ICard } from "./Card";
import { Styled } from "./styles/Section.Styles";

export interface ICardSection {
  cardSize: "small" | "large";
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
              color={(index + 1) % 2 === 0 ? "pink" : "blue"}
              link={card.link}
            />
          ))}
        </Styled.CardContainer>
      )}
      {keywordSection && <div></div>}
    </Styled.Section>
  );
};

export default Section;
