import useLevels from "@/hooks/useLevels";
import styles from "@/styles/Leaderboard.module.css";
import { NextPage } from "next";

const Leaderboard: NextPage = () => {
  const { data, error, isLoading } = useLevels();

  return (
    <div className={styles.leaderboardLayout}>
      <h1 data-cy="leaderboard-title">Leaderboard</h1>
    </div>
  );
};

export default Leaderboard;
