import { Styled } from "../../templates/MainTemplate.styles";
import { ICvArticle } from "../../ui/CV/CVArtice";
import { ICVList } from "../../ui/CV/CvList";
import CVSection from "../../ui/CV/CVSection";
import Footer from "../footer";

const timeLineArticles: ICvArticle[] = [
  {
    date: "2021 - Current",
    articleTitle: "UX Designer at KubikData",
    paragraphs: [
      "Research. Testing, designing, wireframing new features from start to high-fidelity protoypes before handing them over to the development team.",
    ],
  },
  {
    date: "2017-2019",
    articleTitle: "Partner support at Booking.com",
    paragraphs: [
      "Helping customers navigate through the platform, setting up accounts, troubleshooting via email and phone.",
    ],
  },
  {
    date: "2014-2016",
    articleTitle: "Quality & Partner Manager at Cint AB",
    paragraphs: [
      "Monitoring operations and making sure that they are in line with the ISO requirements of the market research industry. Planning and conducting internal auditing and preparing for the extenal ones. Internal trainings.",
    ],
  },
  {
    date: "2009-2013",
    articleTitle: "English teacher, Budapest & Barcelona",
    paragraphs: [
      "Various levels and ages. Exam preparation and conducting exams. Both freelance and language academy positions.",
    ],
  },
];

const qualificationsArticles: ICvArticle[] = [
  {
    articleTitle: "UX/UI Designer",
    paragraphs: ["Ironhack Barcelona, 2019. 2 month intensive bootcamp."],
  },
  {
    articleTitle:
      "English Literature and Linguistics with Teacher’s Degree (MA)",
    paragraphs: ["Peter Pazmany Catholic University, Hungary, 2006"],
  },
];

const workingKnowledge: ICVList[] = [
  {
    title: "Software",
    elements: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Miro",
      "Zeplin",
    ],
  },
  {
    title: "Skills",
    elements: [
      "User Research",
      "Usability & User Testing",
      "Visual Design",
      "Interactive Prototyping",
      "Heuristic Evaluation",
      "Affinity mapping",
      "Workshops",
    ],
  },
];

const CVContent = () => {
  return (
    <Styled.Main>
      <Styled.MainContainer>
        <CVSection title="Timeline" articles={timeLineArticles} />
        <CVSection title="Qualifications" articles={qualificationsArticles} />
        <CVSection title="Working Knowledge" lists={workingKnowledge} />
        <Footer />
      </Styled.MainContainer>
    </Styled.Main>
  );
};

export default CVContent;
