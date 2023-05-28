import { levelsURL, submissionsURL } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //Get levels
    const levels = await fetch(levelsURL).then((response) => response.json());

    //Get submissions
    const submissions = await fetch(submissionsURL, {
      headers: {
        authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
      },
    }).then((response) => response.json());

    return res.status(200).json(submissions);
  } catch (err) {
    return res.status(500).send(err);
  }
}
