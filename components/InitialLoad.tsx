import styles from "@/styles/InitialLoad.module.css";
import { initialLoadText } from "@/utils/strings";
import LoadingScreen from "./common/loading/LoadingScreen";

export default function InitialLoad() {
  return (
    <div className={styles.initialLoad} data-cy="initial-load">
      <LoadingScreen text={initialLoadText} />
    </div>
  );
}
