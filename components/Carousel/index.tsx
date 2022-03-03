import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import styles from "../../styles/Home.module.css";
import Card from "../Card";
import InputCard from "../InputCard";

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

export default function Carousel() {
  const scroll = (direction: "left" | "right") => {
    const card = document.querySelector(`.${styles.carousel}`);
    if (direction === "left") {
      card?.scrollBy({ left: -300, top: 0, behavior: "smooth" });
    } else {
      card?.scrollBy({ left: 300, top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.scrollButtons}>
        <IconButton
          aria-label="Scroll to the left"
          icon={<ChevronLeftIcon />}
          onClick={() => {
            scroll("left");
          }}
        />
        <IconButton
          aria-label="Scroll to the right"
          icon={<ChevronRightIcon />}
          onClick={() => {
            scroll("right");
          }}
        />
      </div>
      <div className={styles.carousel}>
        <InputCard />
        {cards.length > 0
          ? cards.map((card, index) => {
              return <Card key={index} {...card} />;
            })
          : null}
      </div>
    </>
  );
}
