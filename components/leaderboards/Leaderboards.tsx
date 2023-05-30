import useLeaderboards from "@/hooks/useLeaderboards";
import { Leadeboard } from "@/model/Leaderboard";
import styles from "@/styles/Leaderboard.module.css";
import { NextPage } from "next";
import { useState } from "react";

const Leaderboard: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedlevel] = useState<Leadeboard>();
  const { data, error, isLoading } = useLeaderboards();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLevelClick = (item: Leadeboard) => {};

  return (
    <div className={styles.leaderboardLayout}>
      <div className={styles.leaderboardDropdown} onClick={toggleDropdown}>
        <span>
          {selectedLevel ? selectedLevel.levelName : "Select level..."}
          {isOpen ? (
            <div className={styles.arrowUp} />
          ) : (
            <div className={styles.arrowDown} />
          )}
        </span>
        {isOpen && (
          <div className={styles.leaderboardDropdownMenu}>
            {data?.map((level: Leadeboard, index: number) => {
              return (
                <p
                  key={`level-${level.levelId}`}
                  onClick={() => handleLevelClick(level)}
                >{`${index + 1}. ${level.levelName}`}</p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
