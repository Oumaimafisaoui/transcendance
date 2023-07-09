"use client";

import Image from "next/image";
import styles from "../styles/homepage.module.css";
// import Spline from '@splinetool/react-spline';
import bg from "@/../public/bg.png";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button/button";
import Layout from "@/components/Layout/layout";

export default function Homepage() {
  return (
    <Layout>
      <div className={styles.container} id="home">
        <div className={styles.item1}>
          <TypeAnimation
            sequence={[
              "Welcome to the online Pong Game!",
              1000,
              "Chat and play with friends online!",
              1000,
            ]}
            className={styles.title}
            wrapper="div"
            speed={50}
            repeat={Infinity}
          />
          <p className={styles.desc}>
            Join us now and dive into the fun of Pong Game! Join us now and dive
            into the fun of Pong Game! Join us now and dive into the fun of Pong
            Game! Join us now and dive into the fun of Pong Game!
          </p>
          <Button url="auth/register" text="Start Playing!" />
        </div>
        <div className={styles.item2}>
          <Image alt="" src={bg} className={styles.img} />
        </div>
      </div>
    </Layout>
  );
}
