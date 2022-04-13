import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

import styles from "../../styles/Home.module.css";
import Card from "../Card";
import InputCard from "../InputCard";

export default function Carousel({ cards }) {
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
        {cards > 0 ? (
          cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })
        ) : (
          <p>vazio</p>
        )}
      </div>
    </>
  );
}
