import Image from "next/image";
import { Styled } from "./Footer.Styles";

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <Styled.FooterImageContainer>
        <Image
          src="/images/coffee.png"
          alt="Graphic of a cup of steaming coffee"
          height={44}
          width={58}
          layout="fixed"
        />
      </Styled.FooterImageContainer>
      <Styled.FooterParagraph>
        r.a.kertesz@gmail.com / (+34) 644 265 695
      </Styled.FooterParagraph>
      <Styled.FooterParagraph>
        linkedin.com/in/reka-kertesz/
      </Styled.FooterParagraph>
    </Styled.Footer>
  );
};

export default Footer;
