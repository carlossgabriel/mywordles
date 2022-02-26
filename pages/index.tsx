import { Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import InputCard from "../components/InputCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Wordles</title>

        <meta name="description" content="My Wordles" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Wordles</h1>

        <p className={styles.description}>
          Paste your wordle response inside the text box below.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={16}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper}
        >
          <SwiperSlide>
            <InputCard />
          </SwiperSlide>
          <SwiperSlide>
            <InputCard />
          </SwiperSlide>
          <SwiperSlide>
            <InputCard />
          </SwiperSlide>
          <SwiperSlide>
            <InputCard />
          </SwiperSlide>
        </Swiper>
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
};

export default Home;
