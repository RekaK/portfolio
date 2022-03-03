import styled from "@emotion/styled";
import { colors } from "../../styles/variables";

const NavContainer = styled.nav({
  width: "100%",
  height: "100px",
  paddingLeft: "48px",
  paddingTop: "42px",
});

const NavLinkList = styled.ul({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  paddingLeft: "0"
});

const NavLink = styled.a({
  cursor: "pointer",
  color: colors.darkBlue,
  marginRight: "40px",
  fontSize: "18px",
  fontWeight: 600,
  fontFamily: "Source Code Pro, sans-serif",
});

export const Styled = {
  NavContainer,
  NavLinkList,
  NavLink,
};
