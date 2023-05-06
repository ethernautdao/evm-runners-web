import styles from "@/styles/Home.module.css";
import { appTitle, gameDescription } from "@/utils/strings";
import { NextPage } from "next";
import { Discord, Github } from "react-bootstrap-icons";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <h1>{appTitle}</h1>
      <p>Install command placeholder</p>
      <p>{gameDescription}</p>
      <div>
        <a
          href="https://github.com/ethernautdao/evm-runners-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={32} />
        </a>
        <a
          href="https://discord.com/invite/RQ5WYDxUF3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord size={32} />
        </a>
      </div>
    </div>
  );
};

export default Home;
