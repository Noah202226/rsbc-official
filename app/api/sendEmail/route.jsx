// pages/api/sendEmail.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const res = await req.json();

  const mailList = [
    "rsbcprimesmarketing@gmail.com",
    "noaligpitan@gmail.com",
    res.selectedAgentEmail,
  ];

  console.log(res);
  console.log("Agent email:", res.selectedAgentEmail);

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "noaligpitan26@gmail.com",
      pass: "lqzwdvryzsptkmnm",
    },
  });

  // Create the email
  const mailOptions = {
    from: "RSBC <rsbcprimesmarketing@gmail.com>",
    to: mailList,
    subject: "RSBC EMAIL QOUTATION",
    text: `You have a new loan qoutation.`,
    html: `<div style="border: 1px solid #ccc; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            
            <div style="display: flex; align-items: center; justify-content: space-between">
            <img height='50px' width='50px' style="position: absolute; top: 10px; right: 10px" src='https://rsbc-official.vercel.app/rsbc.jpg' alt='rsbc-logo' />
            <p style='color: coral; font-size: 26px'>You have a new loan qoutation </p>
            </div>

            <br /> Name: ${res.name}
            <br /> Email: ${res.email}
            <br /> Contact: ${res.contact}
            <br /> Location: ${res.location}
            <br />
            <br />
            <br /> Desired Amount: <em style='font-weight: bolder'> ${res.desiredAmount} </em> 
            <br /> Status: <em style='font-weight: bolder'> ${res.status}%</em>
            <br /> Loan Duration:<em style='font-weight: bolder'> ${res.loanDuration} Months</em> 
            <br /> Referred by : <em style='font-weight: bolder'>Agent ${res.selectedAgent} </em>

            <br />
            <br />
            <br />
            <p style="text-align: right">Best regards,</p>
            <p style="text-align: right; font-weight: bold"> RSBC MARKETING TEAM</p>
            </div>`,
  };

  // Send the email
  return await transporter
    .sendMail(mailOptions)
    .then((response) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });

  //   return NextResponse.json({ res });
}
// export async function GET(req, { params }) {
//   //   const { name, email, message } = req.body;
//   console.log(req);
//   return NextResponse.json({ name: "noah" });
// }
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { name, email, message } = req.body;

// }
