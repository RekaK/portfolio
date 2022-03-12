import { Styled } from "../../templates/MainTemplate.styles";
import Section from "../../ui/Section";

const AboutContent = () => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <Section
          title="Broad strokes"
          paragraphs={[
            `I am a passionate, ever-curious expat who decided to make a jump from teaching and customer facing roles into UX.`,
            `I’m interested in creating products that are sustainable, ethical and usable besides being profitable. I believe design should drive change and better lives.`,
            `For work, I love creating a friendly and supportive athmosphere where I can support my colleagues and grow together.`,
            `I genuinely love challenges and games, both in and out of work. My hobbies include gaming, arts, and connecting with nature via hikes, on which I usually go with my camera. For my newest challenge, I’m learning to rollerskate.`,
          ]}
        />
        <Section
          title="I strive to be:"
          stickyNotes={[
            "curious",
            "hard-working",
            "friendly",
            "punctual",
            "communi-cative",
            "passionate",
            "humble",
            "honest",
          ]}
        />
        <Section
          title="Oh, and a photo"
          image={{
            src: "/images/photo.png",
            alt: "Photo of Reka",
            height: 212,
            width: 316,
          }}
        />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default AboutContent;
