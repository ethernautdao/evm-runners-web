import { Dispatch, SetStateAction, useState } from "react";
import dropdownStyles from "@/styles/Dropdown.module.css";
import commonStyles from "@/styles/Common.module.css";
import Level from "@/model/Level";

type DropdownProps = {
  data: Level[] | undefined;
  selectedLevel: Level | undefined;
  setSelectedLevel: Dispatch<SetStateAction<Level | undefined>>;
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
    <div
      className={dropdownStyles.dropdown}
      onClick={toggleDropdown}
      data-cy="levels-dropdown"
    >
      <span>
        {selectedLevel ? selectedLevel.name : "Select level..."}
        {isOpen ? (
          <div
            className={commonStyles.arrowUp}
            data-cy="levels-arrow-up"
          />
        ) : (
          <div
            className={commonStyles.arrowDown}
            data-cy="levels-arrow-down"
          />
        )}
      </span>
      {isOpen && (
        <div
          className={dropdownStyles.dropdownMenu}
          data-cy="levels-dropdown-options"
        >
          {data?.map((level: Level, index: number) => {
            return (
              <p
                key={`level-${level.id}`}
                onClick={() => setSelectedLevel(level)}
                data-cy={`level-${level.id}`}
              >{`${index + 1}. ${level.name}`}</p>
            );
          })}
        </div>
      )}
    </div>
  );
}
