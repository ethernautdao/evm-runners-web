import { Leaderboard } from "@/model/Leaderboard";
import { Dispatch, SetStateAction, useState } from "react";
import dropdownStyles from "@/styles/Dropdown.module.css";
import commonStyles from "@/styles/Common.module.css";

type DropdownProps = {
  data: Leaderboard[];
  selectedLevel: Leaderboard | undefined;
  setSelectedLevel: Dispatch<SetStateAction<Leaderboard | undefined>>;
};

export default function Dropdown({
  data,
  selectedLevel,
  setSelectedLevel,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={dropdownStyles.dropdown} onClick={toggleDropdown}>
      <span>
        {selectedLevel ? selectedLevel.levelName : "Select level..."}
        {isOpen ? (
          <div className={commonStyles.arrowUp} />
        ) : (
          <div className={commonStyles.arrowDown} />
        )}
      </span>
      {isOpen && (
        <div className={dropdownStyles.dropdownMenu}>
          {data?.map((level: Leaderboard, index: number) => {
            return (
              <p
                key={`level-${level.levelId}`}
                onClick={() => setSelectedLevel(level)}
              >{`${index + 1}. ${level.levelName}`}</p>
            );
          })}
        </div>
      )}
    </div>
  );
}
