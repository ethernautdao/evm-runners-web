import styles from "@/styles/Home.module.css";
import { copyToClipboard } from "@/utils/shared";
import { appTitle, gameDescription, installCommand } from "@/utils/strings";
import { NextPage } from "next";
import { Clipboard, Discord, Github } from "react-bootstrap-icons";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <h1 data-cy="home-app-title">{appTitle}</h1>
      <span
        className={styles.installCommand}
        onClick={() => copyToClipboard(installCommand)}
      >
        <code>{installCommand}</code>
        <Clipboard size={24} />
      </span>
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
