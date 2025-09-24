import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { projectType, services, budget, timeline, name, email, website, message } = body;

    // Nodemailer transporter (using Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // same Gmail account
      subject: "🚀 New Project Inquiry",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, message: "Failed to send inquiry" }, { status: 500 });
  }
}
