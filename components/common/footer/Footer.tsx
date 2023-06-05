import styles from "@/styles/Footer.module.css";
import { ethernautURL } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className="ethernaut-footer"
        href={ethernautURL}
        target="_blank"
        rel="noopener noreferrer"
        data-cy="edao-footer"
      >
        <p>EthernautDAO 2023✧</p>
      </a>
    </footer>
  );
}
