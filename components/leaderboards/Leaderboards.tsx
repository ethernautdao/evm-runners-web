import { NextPage } from "next";
import { useState } from "react";
import Leaderboard from "@/model/Leaderboard";
import useLeaderboards from "@/hooks/useLeaderboards";
import LoadingScreen from "./loading/LoadingScreen";
import Dropdown from "./dropdown/Dropdown";
import styles from "@/styles/Leaderboard.module.css";
import { errorText } from "@/utils/strings";

const Leaderboard: NextPage = () => {
  const [selectedLevel, setSelectedlevel] = useState<Leaderboard>();
  const { data, error, isLoading } = useLeaderboards();

  return (
    <div className={styles.leaderboardLayout}>
      {error ? (
        <h2>{errorText}</h2>
      ) : isLoading ? (
        <LoadingScreen />
      ) : (
        <Dropdown
          data={data}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedlevel}
        />
      )}
    </div>
  );
};

export default Leaderboard;
