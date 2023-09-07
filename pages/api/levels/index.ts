import { levelsURL } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const levels = await fetch(levelsURL).then((response) => response.json());

    return res.status(200).json(levels);
  } catch (err) {
    return res.status(500).send(err);
  }
}
