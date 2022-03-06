import { Styled } from "../../templates/MainTemplate.styles";
import Section from "../../ui/Section";

const HomeSection = () => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <Section
          title="Background"
          paragraph={`Remote UX designer with a heavy focus on meaningful, ethical, and sustainable design that bring value to both user and stakeholders. Vast experience with working in customer and partner facing roles, connecting with people from all backgrounds and experiences. Cheerful, hard-working co-worker and eternal learner of new disciplines.`}
        />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default HomeSection;
