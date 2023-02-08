import { NextApiRequest, NextApiResponse } from "next";
import sendMail from "emails";
import FeedbackEmail from "emails/FeedbackEmail";
import { ratelimit } from "@/lib/upstash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { success } = await ratelimit.limit("feedback");
    if (!success) {
      res.status(429).json({ error: "잠시 멈추고 다시 생각해 보세요 🥹" });
    }

    const { email, feedback } = req.body;
    if (email === "prewarm") {
      return res.status(200).json({ response: "pre-warmed" });
    }
    if (!feedback) {
      return res.status(400).json({ error: "피드백을 까먹었어요 😟" });
    }

    const response = await sendMail({
      to: "acmest@biblic.net",
      from: "acmest@biblic.net",
      ...(email && { replyTo: email }),
      subject: "💌 새 피드백 도착!",
      component: <FeedbackEmail email={email} feedback={feedback} />,
    });
    res.status(200).json({ response });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
