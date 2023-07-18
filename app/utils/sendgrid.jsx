// utils/sendgrid.js
import axios from "axios";

export async function sendEmail({ to, from, subject, html, apiKey }) {
  const sendGridAPI = "https://api.sendgrid.com/v3/mail/send";

  const data = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from },
    subject,
    content: [{ type: "text/html", value: html }],
  };

  try {
    await axios.post(sendGridAPI, data, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
