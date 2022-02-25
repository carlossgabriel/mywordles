import { Textarea } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

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

        <div className={styles.card}>
          <Input
            placeholder="Basic usage"
            size="lg"
            className={styles.inputWord}
            maxLength={5}
            minLength={5}
          />
          <Textarea
            placeholder="WORDLE result"
            size="lg"
            className={styles.inputBoxes}
            resize="none"
            height="200px"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/carlossgabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by @carlossgabriel
        </a>
      </footer>
    </div>
  );
};

export default Home;
