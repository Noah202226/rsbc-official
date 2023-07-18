import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  const { clientEmail, desiredAmount, loanDuration } = await req.json();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

      return NextResponse.json({ message: "This Worked", success: true });
    })
    .catch((error) => {
      console.error(error);
      return NextResponse.json({ message: error, success: false });
    });
}
