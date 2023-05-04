import styles from "@/styles/Footer.module.css";
import { Discord, Github } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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

      <a
        className="ethernaut-footer"
        href="https://mint.ethernautdao.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>EthernautDAO 2023✧</p>
      </a>
    </footer>
  );
}
