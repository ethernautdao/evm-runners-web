import { submissionsURL } from "@/utils/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let submissionFeedback: string;

    const submission = await fetch(submissionsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization ?? "",
      },
      body: req.body,
    }).then((response) => response.json());

    if (Array.isArray(submission)) {
      const feedback = submission[0];

      //Submissions saved
      if (feedback.submissions) {
        submissionFeedback = `Submitted! You ranked number ${feedback.gas_rank} for gas and number ${feedback.size_rank} for size.`;
      } else {
        //It wasn't a better solution
        submissionFeedback = `Skipped submission as this solution is equal or worse to the current solution you have! Currently, you rank number ${feedback.gas_rank} for gas and number ${feedback.size_rank} for size.`;
      }
    } else {
      //There was an error with the params
      if (submission.error) {
        submissionFeedback = submission.error;
      } else {
        let failedTests: string[] = [];
        //Tests failed
        Object.entries(submission).forEach(([k, v]: any) => {
          if (!v.success) {
            failedTests.push(k);
          }
        });
        submissionFeedback = `Failed tests: ${failedTests.join(
          ", "
        )}. Use the evmr CLI to figure out what's happening.`;
      }
    }

    return res.status(200).json(submissionFeedback);
  } catch (err: any) {
    return res.status(500).send(err);
  }
}
