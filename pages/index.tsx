import { Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Card from "../components/Card";
import InputCard from "../components/InputCard";
import styles from "../styles/Home.module.css";

const cards = [
  {
    word: "teste",
    statistics: ` 1 
    Wordle 252 3/6*
    `,
  },
  {
    word: "teste",
    statistics: ` 2 
    Wordle 252 3/6*
    `,
  },
  {
    word: "teste",
    statistics: ` 3 
    Wordle 252 3/6*
    `,
  },
  {
    word: "teste",
    statistics: ` 4 
    Wordle 252 3/6*
    `,
  },
  {
    word: "teste",
    statistics: ` 5 
    Wordle 252 3/6*
    `,
  },
  {
    word: "teste",
    statistics: ` 6 
    Wordle 252 3/6*
    `,
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wordles</title>

        <meta name="description" content="My Wordles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Wordles</h1>

        <p className={styles.description}>
          Paste your wordle response inside the text box below.
        </p>

        <div className={styles.carousel}>
          <InputCard />
          {cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
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
};

export default Home;
