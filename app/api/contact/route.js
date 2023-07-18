import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  try {
    const { clientEmail, desiredAmount, loanDuration } = await req.json();

    console.log(clientEmail, desiredAmount, loanDuration);

    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      console.log("sendgrid api key set.");
    } catch (e) {
      console.log("Failed setting api key", e);
    }

    const msg = {
      to: "noaligpitan26@gmail.com", // Change to your recipient
      from: "noaligpitan@gmail.com", // Change to your verified sender
      subject: `Inquery for ${clientEmail}`,
      text: "RSBC LOAN",
      html: `Client Desired Amount: <strong>${desiredAmount}</strong><br />
          Loan Duration: <strong>${loanDuration} months</strong><br />
          Response him/her immediately.
            `,
    };

    sgMail
      .send(msg)
      .then((response) => {
        console.log("Email sent.");

        // return NextResponse.json({ message: "This Worked", success: true });
      })
      .catch((error) => {
        console.error("Error sending email", error);
        // return NextResponse.json({ message: error, success: false });
      });
  } catch (e) {
    console.log("Error on request", e);
  }
}
