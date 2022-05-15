import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

import styles from "../../styles/Home.module.css";

export default function InputCard() {
  const [word, setWord] = useState("");
  const [statistics, setStatistics] = useState("");

  const handleClick = async () => {
    try {
      const data = await fetch("api/cards/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          word,
          statistics,
        }),
      });
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className={styles.card}>
      <Input
        placeholder="Today wordle"
        size="lg"
        className={styles.inputWord}
        maxLength={5}
        minLength={5}
        onChange={(e) => setWord(e.target.value)}
      />
      <Textarea
        placeholder="WORDLE result"
        size="lg"
        resize="none"
        height="200px"
        maxLength={70}
        onChange={(e) => setStatistics(e.target.value)}
      />
      <Button
        colorScheme="teal"
        variant="outline"
        className={styles.button}
        onClick={handleClick}
      >
        Save
      </Button>
    </div>
  );
}
