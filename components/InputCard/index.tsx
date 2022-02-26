import { Button, Input, Textarea } from "@chakra-ui/react";

import styles from "../../styles/Home.module.css";

export default function InputCard() {
  return (
    <div className={styles.card}>
      <Input
        placeholder="Today wordle"
        size="lg"
        className={styles.inputWord}
        maxLength={5}
        minLength={5}
      />
      <Textarea
        placeholder="WORDLE result"
        size="lg"
        resize="none"
        height="200px"
      />
      <Button colorScheme="teal" variant="outline" className={styles.button}>
        Button
      </Button>
    </div>
  );
}
