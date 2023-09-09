import { NextPage } from "next";
import { useState } from "react";
import Leaderboard from "@/model/Leaderboard";
import useLeaderboards from "@/hooks/useLeaderboards";
import styles from "@/styles/Leaderboard.module.css";
import { errorText, loadingText } from "@/utils/strings";
import LeaderboardTable from "./table/LeaderboardTable";
import useLevels from "@/hooks/useLevels";
import Level from "@/model/Level";
import Dropdown from "../common/dropdown/Dropdown";
import LoadingScreen from "../common/loading/LoadingScreen";

const Leaderboard: NextPage = () => {
  const { data: levelData } = useLevels();
  const [selectedLevel, setSelectedlevel] = useState<Level>();
  const { data, error, isLoading } = useLeaderboards();

  return (
    <div className={styles.leaderboardLayout} data-cy="leaderboards-layout">
      {isLoading ? (
        <LoadingScreen text={loadingText} />
      ) : error ? (
        <h2 data-cy="leaderboards-error-text">{errorText}</h2>
      ) : (
        <div className={styles.leaderboardResults}>
          <Dropdown
            data={levelData}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedlevel}
          />

          {selectedLevel && (
            <div className={styles.leaderboardTables}>
              <LeaderboardTable
                key="gas-table"
                data={
                  data.find((l: Leaderboard) => l.levelId === selectedLevel?.id)
                    .gasLeaderboard ?? []
                }
                rowsPerPage={10}
                type={1} //Gas
              />

              <LeaderboardTable
                key="size-table"
                data={
                  data.find((l: Leaderboard) => l.levelId === selectedLevel?.id)
                    .sizeLeaderboard ?? []
                }
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
