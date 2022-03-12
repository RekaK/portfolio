import type { NextPage } from "next";
import Head from "next/head";
import HomeSection from "../components/home";
import MainTemplate from "../templates/MainTemplate";

const Home: NextPage = () => {
  const hero = {
    image: "/images/laptop.png",
    title: "Réka",
    subtitle: "Friendly neighborhood UX wizard",
    spelling: "(‘ray-kuh)",
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Portfolio for Reka Kertesz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate hero={hero}>
        <HomeSection />
      </MainTemplate>
    </div>
  );
};

export default Home;
