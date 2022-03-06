import Link from "next/link";
import { Styled } from "./styles/Card.Styles";

interface CardProps {
  subtitle?: string;
  title: string;
  link: string;
  text: string;
  size: "large" | "small";
  color: "blue" | "pink";
}

export interface ICard {
  subtitle?: string;
  title: string;
  link: string;
  text: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  link,
  text,
  color,
  size,
}) => {
  return (
    <Link href={link} passHref>
      <Styled.Card color={color} size={size}>
        {subtitle && <Styled.CardSubtitle>{subtitle}</Styled.CardSubtitle>}
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardText>{text}</Styled.CardText>
      </Styled.Card>
    </Link>
  );
};

export default Card;
