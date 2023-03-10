import { NextApiRequest, NextApiResponse } from "next";
import { addLink, getLinksForProject } from "@/lib/api/links";
import { withProjectAuth } from "@/lib/auth";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1500kb",
    },
  },
};

export default withProjectAuth(
  async (req: NextApiRequest, res: NextApiResponse, _, session) => {
    // GET /api/projects/[slug]/domains/[domain]/links - Get all links for a project
    if (req.method === "GET") {
      const { domain, status, sort, userId } = req.query as {
        domain: string;
        status?: string;
        sort?: "createdAt" | "clicks";
        userId?: string;
      };
      const response = await getLinksForProject({
        domain,
        status,
        sort,
        userId,
      });
      return res.status(200).json(response);

      // POST /api/projects/[slug]/domains/[domain]/links – create a new link
    } else if (req.method === "POST") {
      const { domain } = req.query as { domain: string };
      let { key, url } = req.body;
      if (!domain || !key || !url) {
        return res.status(400).json({ error: "도메인 또는 URL의 키가 없습니다." });
      }
      const { hostname, pathname } = new URL(url);
      if (hostname === domain && pathname === `/${key}`) {
        return res.status(400).json({ error: "유효하지 않은 URL" });
      }
      const response = await addLink({
        ...req.body,
        userId: session.user.id,
      });
      if (response === null) {
        return res.status(400).json({ error: "키가 이미 존재합니다." });
      }
      return res.status(200).json(response);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ error: `Method ${req.method} Not Allowed` });
    }
  },
  {
    excludeGet: true,
    needNotExceededUsage: true,
  },
);
