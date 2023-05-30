import { Leadeboard } from "@/model/Leaderboard";
import { levelsURL, submissionsURL } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data: Leadeboard[] = [];

    //Get levels
    const levels = await fetch(levelsURL).then((response) => response.json());

    //Get submissions
    const submissions = await fetch(submissionsURL, {
      headers: {
        authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
      },
    }).then((response) => response.json());

    //Format data
    levels.forEach((level: any) => {
      const levelSubmissions = submissions.filter(
        (submission: any) => submission.level_id === Number.parseInt(level.id)
      );

      const levelGasLeaderboard = levelSubmissions
        .filter((submission: any) => submission.optimized_for === "gas")
        .sort(
          (a: any, b: any) =>
            a.gas - b.gas ||
            Date.parse(a.submitted_at) - Date.parse(b.submitted_at)
        );

      const levelSizeLeaderboard = levelSubmissions
        .filter((submission: any) => submission.optimized_for === "size")
        .sort(
          (a: any, b: any) =>
            a.size - b.size ||
            Date.parse(a.submitted_at) - Date.parse(b.submitted_at)
        );

      data.push({
        levelId: level.id,
        levelName: level.name,
        gasLeaderboard: levelGasLeaderboard,
        sizeLeaderboard: levelSizeLeaderboard,
      });
    });

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
}
