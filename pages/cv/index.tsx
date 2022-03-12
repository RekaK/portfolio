import type { NextPage } from "next";
import Head from "next/head";
import CVContent from "../../components/cv";
import MainTemplate from "../../templates/MainTemplate";


const CVPage: NextPage = () => {
  const hero = {
    image: "/images/cv.png",
    title: "Curriculum Vitae",
  };

  return (
    <div>
      <Head>
        <title>Curriculum Vitae</title>
        <meta name="description" content="Reka Kertesz: Curriculum Vitae" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate hero={hero}>
       <CVContent />
      </MainTemplate>
    </div>
  );
};

export default CVPage;