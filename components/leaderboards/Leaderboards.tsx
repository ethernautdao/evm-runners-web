import useLeaderboards from "@/hooks/useLeaderboards";
import { Leaderboard } from "@/model/Leaderboard";
import styles from "@/styles/Leaderboard.module.css";
import { NextPage } from "next";
import { useState } from "react";
import Dropdown from "./dropdown/Dropdown";

const Leaderboard: NextPage = () => {
  const [selectedLevel, setSelectedlevel] = useState<Leaderboard>();
  const { data, error, isLoading } = useLeaderboards();

  return (
    <div className={styles.leaderboardLayout}>
      <Dropdown
        data={data}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedlevel}
      />
    </div>
  );
};

export default Leaderboard;
