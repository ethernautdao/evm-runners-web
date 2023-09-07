import { NextPage } from "next";
import styles from "@/styles/Submit.module.css";
import useSubmit from "@/hooks/useSubmit";
import LoadingScreen from "../leaderboards/loading/LoadingScreen";
import { useAccount } from "wagmi";
import {
  connectWalletText,
  errorText,
  loadingText,
  submitSolutionErrorText,
  submitUserErrorText,
  submittingText,
} from "@/utils/strings";
import Dropdown from "../common/dropdown/Dropdown";

const Submit: NextPage = () => {
  const { isConnected } = useAccount();
  const {
    bytecode,
    selectedLevel,
    submissionData,
    levelData,
    isLoading,
    isSubmitting,
    levelsError,
    usersError,
    submissionError,
    setBytecode,
    setSelectedlevel,
    submitSolution,
  } = useSubmit();

  const handleChange = (e: any) => {
    setBytecode(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitSolution();
  };

  return (
    <div className={styles.submitLayout} data-cy="submit-layout">
      {!isConnected ? (
        <h2 data-cy="submit-connect-text">{connectWalletText}</h2>
      ) : isLoading ? (
        <LoadingScreen text={loadingText} />
      ) : levelsError ? (
        <h2 data-cy="submit-level-error-text">{errorText}</h2>
      ) : usersError ? (
        <h2 data-cy="submit-user-error-text">{submitUserErrorText}</h2>
      ) : (
        <div className={styles.submitFeedbackLayout}>
          <form className={styles.submitForm} onSubmit={handleSubmit}>
            <Dropdown
              data={levelData}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedlevel}
            />
            <input
              placeholder="bytecode"
              value={bytecode}
              onChange={handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
          {isSubmitting ? (
            <LoadingScreen text={submittingText} />
          ) : submissionError ? (
            <p data-cy="submit-solution-error-text">
              {submitSolutionErrorText}
            </p>
          ) : (
            <p>{submissionData}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Submit;
