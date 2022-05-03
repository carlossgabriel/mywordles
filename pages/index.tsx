// Import required AWS SDK clients and commands for Node.js.
import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { Image } from "@chakra-ui/react";
import Head from "next/head";

import Carousel from "../components/Carousel";
import { s3Client } from "../lib/awsClient.js";
import styles from "../styles/Home.module.css";

// Set the parameters
const params = {
  Bucket: "simplewordbucket", // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "", // The name of the object. For example, 'sample_upload.txt'.
  Body: "", // The content of the object. For example, 'Hello world!".
};

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

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

export async function getServerSideProps() {
  const result = await run();
  console.log("result", result);

  return { props: { ...data } };
}

export default Home;
