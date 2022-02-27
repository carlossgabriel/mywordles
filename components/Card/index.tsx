import { Text, Divider } from "@chakra-ui/react";

import styles from "../../styles/Home.module.css";

export default function Card({
  word,
  statistics,
}: {
  word: string;
  statistics: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.lettersBox}>
        {word.split("").map((letter, index) => {
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
        {statistics}
      </Text>
    </div>
  );
}
