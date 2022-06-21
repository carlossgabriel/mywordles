import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

import styles from "../../styles/Home.module.css";
import Card from "../Card";
import InputCard from "../InputCard";

export default function Carousel() {
  const scroll = (direction: "left" | "right") => {
    const card = document.querySelector(`.${styles.carousel}`);
    if (direction === "left") {
      card?.scrollBy({ left: -300, top: 0, behavior: "smooth" });
    } else {
      card?.scrollBy({ left: 300, top: 0, behavior: "smooth" });
    }
  };

  const retrievedCards = async () => {
    let data;
    try {
      data = await fetch("api/cards/", {
        method: "GET",
      });
      console.log(data.json());
    } catch (e) {
      console.log("error", e);
    }
    return data;
  };

  const cards = retrievedCards();
  console.log("cards", cards);

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
        {cards.length > 0 ? (
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
