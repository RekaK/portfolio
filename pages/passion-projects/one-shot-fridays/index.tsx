import type { NextPage } from "next";
import Head from "next/head";
import PassionProjectContent from "../../../components/passionProject";
import MainTemplate from "../../../templates/MainTemplate";

const images = [
  {
    url: "/osf/oneShotFlowChart.png",
    alt: "Flow Chart of how one shot Fridays work.",
    dimensions: {
      height: 558,
      width: 306,
    },
  },
];

const About: NextPage = () => {
  const hero = {
    image: "/images/planet.png",
    title: "Community",
    subtitle: "Event Organizer",
  };

  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Community Management - One Shot Friday"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate hero={hero}>
        <PassionProjectContent
          mainSection={{
            title: "What do I do?",
            paragraphs: [
              `I schedule, host, and facilitate team based online events that require immense team communication, creative problem solving and strict time management. I’m involved in the management of two, weekly recurring after work events which are usually hosted on Discord and on various other online platforms.`,
              `Hosting also means consistently creating content which is then shared with members of the community to work and interact with.`,
              `I also help with branding and creating marketing materials to help the recruitment of new members for various online thematic groups.`,
              `Below is a start guide infographic I created for new members. `,
            ],
          }}
          imageGallery={images}
        />
      </MainTemplate>
    </div>
  );
};

export default About;
