import type { NextPage } from "next";
import Head from "next/head";
import PassionProjectContent from "../../../components/passionProject";
import MainTemplate from "../../../templates/MainTemplate";
import { IImageObject } from "../../../ui/ImageGrid";

const images: IImageObject[] = [
  {
    url: "/wizards/wizards0.png",
    alt: "Notion board for 35Wizards",
    dimensions: { height: 166, width: 265 },
  },
  {
    url: "/wizards/wizards1.png",
    alt: "Database plan for 35Wizards Backend",
    dimensions: { height: 166, width: 265 },
  },
  {
    url: "/wizards/wizards2.png",
    alt: "Logical flow of 35Wizards",
    dimensions: { height: 166, width: 265 },
  },
  {
    url: "/wizards/wizards3.png",
    alt: "Button states",
    dimensions: { height: 166, width: 265 },
  },
  {
    url: "/wizards/wizards4.png",
    alt: "Wireframe for character sheet management",
    dimensions: { height: 166, width: 265 },
  },
  {
    url: "/wizards/wizards5.png",
    alt: "Diagram of D&D 3.5 ruleset",
    dimensions: { height: 166, width: 265 },
  },
];

const About: NextPage = () => {
  const hero = {
    image: "/images/mobile.png",
    title: "35 Wizards",
    subtitle: "Passion Project",
  };

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="35 Wizards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate hero={hero}>
        <PassionProjectContent
          mainSection={{
            title: "What is 35 Wizards?",
            paragraphs: [
              `It’s a 2 person (dev+UX) project to create a character tracker for a table top role playing game called Dungeons and Dragons 3.5 Edition.`,
              `This is a fully personal project. We aim to create a web app that allows the user to create and manage a character in line with the complex rules of D&D 3.5.`,
              `We work remotely, in sprints. We use Notion and Miro to organise our work and we hold weekly early morning (before work!) meetings via Discord. I create designs in Figma. Below are some snippets of our work.`,
            ],
          }}
          imageGallery={images}
          buttonSection={{
            url: "",
            note: "(opens in a new window and is a bit loud!)",
          }}
        />
      </MainTemplate>
    </div>
  );
};

export default About;
