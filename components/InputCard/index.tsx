import { Button, Input, Textarea } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

function InputCard() {
  return (
    <div className={styles.card}>
      <Input
        placeholder="Type here your wordle from today"
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
      <Button colorScheme="teal" variant="outline" className={styles.button}>
        Button
      </Button>
    </div>
  );
}

export { InputCard };
