import { NextPage } from "next";
import { useState } from "react";
import Leaderboard from "@/model/Leaderboard";
import useLeaderboards from "@/hooks/useLeaderboards";
import LoadingScreen from "./loading/LoadingScreen";
import Dropdown from "./dropdown/Dropdown";
import styles from "@/styles/Leaderboard.module.css";
import { errorText } from "@/utils/strings";
import LeaderboardTable from "./table/LeaderboardTable";

const Leaderboard: NextPage = () => {
  const [selectedLevel, setSelectedlevel] = useState<Leaderboard>();
  const { data, error, isLoading } = useLeaderboards();

  return (
    <div className={styles.leaderboardLayout} data-cy="leaderboards-layout">
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <h2 data-cy="leaderboards-error-text">{errorText}</h2>
      ) : (
        <div className={styles.leaderboardResults}>
          <Dropdown
            data={data}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedlevel}
          />

          {selectedLevel && (
            <div className={styles.leaderboardTables}>
              <LeaderboardTable
                key="gas-table"
                data={selectedLevel?.gasLeaderboard ?? []}
                rowsPerPage={10}
                type={1} //Gas
              />

              <LeaderboardTable
                key="size-table"
                data={selectedLevel?.sizeLeaderboard ?? []}
                rowsPerPage={10}
                type={2} //Size
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
