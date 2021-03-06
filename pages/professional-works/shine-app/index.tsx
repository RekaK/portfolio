import type { NextPage } from "next";
import Head from "next/head";
import ProjectTemplate from "../../../templates/ProjectTemplate";

const Shine: NextPage = () => {

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="35 Wizards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectTemplate title={`Redesigning "Shine"`}></ProjectTemplate>
    </div>
  );
};

export default Shine;
