import styles from "@/styles/Home.module.css";
import { appTitle, gameDescription } from "@/utils/strings";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <h1>{appTitle}</h1>
      <p>Install command placeholder</p>
      <p>{gameDescription}</p>
      <Link href="/leaderboards">
        <p>Check the leaderboards!</p>
      </Link>
    </div>
  );
};

export default Home;
