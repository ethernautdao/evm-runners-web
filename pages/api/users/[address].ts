import { userByWalletAddressURL } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await fetch(
      `${userByWalletAddressURL}/${req.query.address ?? ""}`,
      {
        headers: {
          authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
        },
      }
    ).then((response) => response.json());

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send(err);
  }
}
