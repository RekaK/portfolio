import { Styled } from "./Nav.styles";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter()



  return (
    <Styled.NavContainer>
      <Styled.NavLinkList>
        <Link href="/" passHref>
          <Styled.NavLink isActive={router.pathname === "/"} >home</Styled.NavLink>
        </Link>
        <Link href="/about" passHref>
          <Styled.NavLink isActive={router.pathname === "/about"}>about</Styled.NavLink>
        </Link>
        <Link href="/cv" passHref>
          <Styled.NavLink isActive={router.pathname === "/cv"}>cv</Styled.NavLink>
        </Link>
      </Styled.NavLinkList>
    </Styled.NavContainer>
  );
};

export default Nav;
