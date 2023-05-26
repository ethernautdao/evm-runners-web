import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
