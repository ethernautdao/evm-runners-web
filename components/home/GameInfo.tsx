import { appTitle, gameDescription } from "@/utils/strings";

export default function GameInfo() {
  return (
    <div>
      <h1>{appTitle}</h1>
      <p>Install command placeholder</p>
      <p>{gameDescription}</p>
    </div>
  );
}
