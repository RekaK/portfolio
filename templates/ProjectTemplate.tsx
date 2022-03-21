import { useRouter } from "next/router";
import Nav from "../components/nav";
import Button from "../ui/Buttons/Button";
import { Styled } from "./styles/ProjectTemplate.styles";

interface ISubtitleItem {
  icon: string;
  text: string;
}
interface ProjectTemplateProps {
  title: string;
  subtitles?: ISubtitleItem[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  children,
  title,
  subtitles,
}) => {
  const router = useRouter();

  return (
    <Styled.Main>
      <Nav />
      <Styled.MainContainer>
        <Styled.BackButtonContainer>
          {" "}
          <Button
            label="back"
            onClick={() => router.back()}
            iconUrl={"/icons/backArrow.png"}
          />
        </Styled.BackButtonContainer>
        <Styled.TitleContainer>
          <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
          {subtitles &&
            subtitles.length > 0 &&
            subtitles.map((subtitle) => (
              <Styled.SubtitleItem key={subtitle.text}>
                <Styled.Subtitle>{subtitle.text}</Styled.Subtitle>
              </Styled.SubtitleItem>
            ))}
        </Styled.TitleContainer>
        {children}
        <div>
          {" "}
          <Button
            label="back to top"
            onClick={() => {
              return;
            }}
          />
        </div>
      </Styled.MainContainer>
      <Styled.ProjectFooter />
    </Styled.Main>
  );
};

export default ProjectTemplate;
