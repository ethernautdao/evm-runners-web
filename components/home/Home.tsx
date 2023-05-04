import styles from "@/styles/Home.module.css";
import Footer from "../shared/Footer";
import GameInfo from "./GameInfo";

export default function Home() {
  return (
    <div className={styles.main}>
      <GameInfo />
      <Footer />
    </div>
  );
}
