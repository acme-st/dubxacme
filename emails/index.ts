import { buildSendMail } from "mailing-core";
import nodemailer from "nodemailer";

const sendMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp.postmarkapp.com",
    port: 587,
    auth: {
      user: process.env.POSTMARK_API_KEY,
      pass: process.env.POSTMARK_API_KEY,
    },
  }),
  defaultFrom: "ACME.ST <acmest@biblic.net>",
  configPath: "./mailing.config.json",
});

export default sendMail;

export const sendMarketingMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp-broadcasts.postmarkapp.com",
    port: 587,
    auth: {
      user: process.env.POSTMARK_MARKETING_API_KEY,
      pass: process.env.POSTMARK_MARKETING_API_SECRET,
    },
  }),
  defaultFrom: "Acme.st <acmest@biblic.net>",
  configPath: "./mailing.config.json",
});
