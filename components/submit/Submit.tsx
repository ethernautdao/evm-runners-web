import { NextPage } from "next";
import styles from "@/styles/Submit.module.css";
import useSubmit from "@/hooks/useSubmit";
import LoadingScreen from "../common/loading/LoadingScreen";
import { useAccount } from "wagmi";
import {
  connectWalletText,
  connectWalletCommand,
  errorText,
  loadingText,
  submitSolutionErrorText,
  submitUserErrorText,
  submittingText,
  submitUserErrorTip,
} from "@/utils/strings";
import Dropdown from "../common/dropdown/Dropdown";
import { useState } from "react";
import { copyToClipboard } from "@/utils/shared";
import { Clipboard, ClipboardCheckFill } from "react-bootstrap-icons";

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

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setBytecode(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitSolution();
  };

  const handleCopy = () => {
    copyToClipboard(connectWalletCommand);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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
        <div>
          <h2 data-cy="submit-user-error-text">{submitUserErrorText}</h2>
          <h2>{submitUserErrorTip}</h2>
          <span className={styles.connectWalletCommand}>
            <code>{connectWalletCommand}</code>
            {isCopied ? (
              <ClipboardCheckFill size={24} data-cy="command-copied-icon" />
            ) : (
              <Clipboard size={24} onClick={handleCopy} />
            )}
          </span>
        </div>
      ) : (
        <div className={styles.submitFeedbackLayout} data-cy="submit-form">
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
