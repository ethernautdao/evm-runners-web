import { levelUrl } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await fetch(levelUrl).then((response) => response.json());
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
}
