import { Styled } from "../../templates/MainTemplate.styles";
import { ICard } from "../../ui/Card";
import Section, { ICardSection } from "../../ui/Section";

const cards: ICard[] = [
  {
    subtitle: "Current",
    title: "Designer at Kubikdata",
    text: "Research. Testing, designing, wireframing new features from start to high-fidelity protoypes before handing them over to the development team.",
    link: "/professional-works/kubikdata",
  },
  {
    subtitle: "Ironhack",
    title: "Shine App Redesign",
    text: "Redesign of a cross-platform hotel app. Research, testing, high-fidelity prototyping. Graduation work, 2 weeks in a team of 2.",
    link: "/professional-works/shine-app",
  },
];

const smallCards: ICard[] = [
  {
    title: "35 Wizards",
    text: "UX & UI design for a Dungeons and Dragons 3.5 edition character tracker.",
    link: "/passion-projects/35wizards",
  },
  {
    title: "Community management",
    text: "I organise weekly creative, collaborative storytelling sessions.",
    link: "/passion-projects/one-shot-fridays",
  },
];

const cardSection: ICardSection = {
  cardSize: "large",
  cards,
};

const smallCardSection: ICardSection = {
  cardSize: "small",
  cards: smallCards,
};

const HomeSection = () => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <Section
          title="Background"
          paragraph={`Remote UX designer with a heavy focus on meaningful, ethical, and sustainable design that bring value to both user and stakeholders. Vast experience with working in customer and partner facing roles, connecting with people from all backgrounds and experiences. Cheerful, hard-working co-worker and eternal learner of new disciplines.`}
        />
        <Section title="Professional Works" cardSection={cardSection} />
        <Section title="Professional Works" cardSection={smallCardSection} />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default HomeSection;
