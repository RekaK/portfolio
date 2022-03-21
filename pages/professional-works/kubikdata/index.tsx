import type { NextPage } from "next";
import Head from "next/head";
import ProjectTemplate from "../../../templates/ProjectTemplate";

const KubikData: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="35 Wizards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectTemplate title="UX at Kubik Data"></ProjectTemplate>
    </div>
  );
};

export default KubikData;
