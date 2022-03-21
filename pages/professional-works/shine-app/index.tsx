import type { NextPage } from "next";
import Head from "next/head";
import PassionProjectContent from "../../../components/passionProject";
import MainTemplate from "../../../templates/MainTemplate";
import ProjectTemplate from "../../../templates/ProjectTemplate";
import { IImageObject } from "../../../ui/ImageGrid";

const Shine: NextPage = () => {

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="35 Wizards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectTemplate></ProjectTemplate>
    </div>
  );
};

export default Shine;
