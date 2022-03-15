import Image from "next/image";
import { Styled } from "./Buttons.Styles";

interface ButtonProps {
  onClick: () => void;
  label: string;
  iconUrl?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, iconUrl }) => {
  return (
    <Styled.Button onClick={onClick}>
      {iconUrl && (
        <Styled.ImageWrapper>
          <Image
            src={iconUrl}
            layout={"fixed"}
            width={14}
            height={14}
            alt="back"
          />
        </Styled.ImageWrapper>
      )}
      {label}
    </Styled.Button>
  );
};

export default Button;
