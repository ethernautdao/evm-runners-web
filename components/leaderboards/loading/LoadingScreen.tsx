import styles from "@/styles/LoadingScreen.module.css";

type LoadingScreenProps = {
  text: string;
};

export default function LoadingScreen({ text }: LoadingScreenProps) {
  return (
    <div className={styles.loadingScreen} data-cy="loading-screen">
      <div className={styles.ripple} data-cy="loading-ripple">
        <div></div>
        <div></div>
      </div>
      <p data-cy="loading-text">{text}</p>
    </div>
  );
}
