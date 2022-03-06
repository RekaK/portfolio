import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

interface CardStyleProps {
  size: "large" | "small";
  color: "blue" | "pink";
}

const Card = styled.article<CardStyleProps>((props) => ({
  position: "relative",
  width: "264px",
  height: props.size === "large" ? "190px" : "124px",
  paddingLeft: "30px",
  paddingTop: "18px",
  paddingRight: "24px",
  backgroundColor: props.color === "blue" ? colors.lightBlue : colors.pink,
  borderRadius: "5px",
}));

const CardSubtitle = styled.h5({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "12px",
  lineHeight: "16x",
  maxWidth: "220px",
  marginBottom: "6px",
});

const CardTitle = styled.h4({
  fontFamily: "Bebas Neue",
  color: colors.darkBlue,
  fontWeight: 400,
  fontSize: "20px",
  letterSpacing: "4%",
  lineHeight: "24px",
  maxWidth: "220px",
});

const CardText = styled.p({
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 400,
  color: colors.darkBlue,
  fontSize: "12px",
  lineHeight: "18x",
  maxWidth: "220px",
});

const NextArrow = styled.div({
  position: "absolute",
  content: `""`,
  right: "14px",
  bottom: "14px",
});

export const Styled = { Card, CardSubtitle, CardText, CardTitle, NextArrow };
