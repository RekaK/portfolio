import { CSSProperties } from "@emotion/serialize";
import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const defaultButton: CSSProperties = {
  padding: "14px 12px",
  border: "none",
  backgroundColor: colors.purple,
  color: colors.darkBlue,
  fontFamily: "Noto Sans, sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "23px",
  borderRadius: "5px",
  boxShadow: "0px 4px 4px #9C8AD4",
};

const ImageWrapper = styled.div({
  marginRight: "4px",
});

const LinkButton = styled.a({});
const Button = styled.button({
  ...defaultButton,
  display: "flex",
});

export const Styled = {
  LinkButton,
  ImageWrapper,
  Button,
};
