import styles from "@/styles/Home.module.css";
import { discordURL, githubURL } from "@/utils/constants";
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
        <code data-cy="home-install-command">{installCommand}</code>
        {isCopied ? (
          <ClipboardCheckFill size={24} data-cy="command-copied-icon" />
        ) : (
          <Clipboard
            size={24}
            onClick={handleCopy}
            data-cy="command-copy-icon"
          />
        )}
      </span>
      <p data-cy="home-game-description">{gameDescription}</p>
      <div>
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="github-icon"
        >
          <Github size={32} />
        </a>
        <a
          href={discordURL}
          target="_blank"
          rel="noopener noreferrer"
          data-cy="discord-icon"
        >
          <Discord size={32} />
        </a>
      </div>
    </div>
  );
};

export default Home;
