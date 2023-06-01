import Submission from "./Submission";

export default interface Leaderboard {
  levelId: number;
  levelName: string;
  gasLeaderboard: Submission[];
  sizeLeaderboard: Submission[];
}
