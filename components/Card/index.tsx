import { Text, Divider } from "@chakra-ui/react";

import styles from "../../styles/Home.module.css";

// const word = "teste";

// const statistics = `Wordle 252 3/6*

// 🟩⬛⬛⬛⬛
// 🟩⬛⬛🟩🟩
// 🟩🟩🟩🟩🟩`;

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.lettersBox}>
        {props.word.split("").map((letter, index) => {
          return (
            <Text key={index} className={styles.letter}>
              {letter.toUpperCase()}
            </Text>
          );
        })}
      </div>
      <Divider marginTop="16px" marginBottom="16px" />
      <Text
        fontSize="4xl"
        className={styles.statistics}
        height="250px"
        textAlign="center"
      >
        {props.statistics}
      </Text>
    </div>
  );
}
