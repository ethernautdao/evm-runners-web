import styles from "@/styles/Leaderboard.module.css";
import { NextPage } from "next";

const Leaderboard: NextPage = () => {
  return (
    <div className={styles.leaderboardLayout}>
      <h1 data-cy="leaderboard-title">Leaderboard</h1>
    </div>
  );
};

export default Leaderboard;
