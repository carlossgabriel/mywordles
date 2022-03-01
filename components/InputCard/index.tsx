import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

import styles from "../../styles/Home.module.css";

export default function InputCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async () => {
    try {
      console.log(title, description);
      await fetch("/api/word/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
    } catch (error) {
      console.log(error);
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
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="WORDLE result"
        size="lg"
        resize="none"
        height="200px"
        maxLength={70}
        onChange={(e) => setDescription(e.target.value)}
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
