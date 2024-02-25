import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



export async function POST( req: Request, ) {
  if (req.method === "POST") {
    const { fullName, email, subject, message } = await req.json();

    try {
      //create a nodemailer transport object (configure with your email provider)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user:process.env.CONTACT_EMAIL,
          pass: process.env.CONTACT_EMAIL_PASSWORD,
        }
      });
      const mailOptions = {
        from: email,
        to: "info.zimscholars@gmail.com",
        subject: subject,
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      };

      //send email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Email has been sent!" });

    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error sending email!" });
    }

  } else {
    return NextResponse.json({ message: "Method not allowed "});
  }
}  