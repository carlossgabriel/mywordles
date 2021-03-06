import { IconButton, Image } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { BiUserCircle } from "react-icons/bi";

import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";

const prisma = new PrismaClient();

function Home({ cards }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wordles</title>

        <meta name="description" content="My Wordles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Wordles</h1>

        <p className={styles.description}>
          Paste your wordle response inside the input card below and hit save.
        </p>

        <Carousel cards={cards} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/carlossgabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/42910903?v=4"
            alt="Carlos Gabriel"
            className={styles.avatar}
          />
          Made by @carlossgabriel
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await prisma.word.findMany();
  console.log("data", data);

  return { props: { ...data } };
}

export default Home;
