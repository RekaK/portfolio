import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../../components/about";
import MainTemplate from "../../templates/MainTemplate";


const About: NextPage = () => {
  const hero = {
    image: "/images/aboutMe.png",
    title: "About Me",
  };

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Reka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate hero={hero}>
        <AboutSection />
      </MainTemplate>
    </div>
  );
};

export default About;