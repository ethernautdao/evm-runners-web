import styles from "@/styles/Home.module.css";
import { copyToClipboard } from "@/utils/shared";
import { appTitle, gameDescription, installCommand } from "@/utils/strings";
import { NextPage } from "next";
import { useState } from "react";
import {
  Clipboard,
  ClipboardCheckFill,
  Discord,
  Github,
} from "react-bootstrap-icons";

const Home: NextPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    copyToClipboard(installCommand);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className={styles.home}>
      <h1 data-cy="home-app-title">{appTitle}</h1>
      <span className={styles.installCommand}>
        <code>{installCommand}</code>
        {isCopied ? (
          <ClipboardCheckFill size={24} />
        ) : (
          <Clipboard size={24} onClick={handleCopy} />
        )}
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
