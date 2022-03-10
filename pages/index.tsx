import { Icon, Image } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { BiUserCircle } from "react-icons/bi";

import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wordles</title>

        <meta name="description" content="My Wordles" />
      </Head>

      <main className={styles.main}>
        <IconButton
          aria-label="User"
          icon={<BiUserCircle />}
          onClick={() => {
            Router.push("/user");
          }}
        />
        <h1 className={styles.title}>My Wordles</h1>

        <p className={styles.description}>
          Paste your wordle response inside the input card below and hit save.
        </p>

        <Carousel />
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
