import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail configuration
const GMAIL_USER = process.env.GMAIL_USER || "schmitzbrosinvestments@gmail.com";
const GMAIL_APP_PASSWORD =
  process.env.GMAIL_APP_PASSWORD || "wxni tdgm egdg tsrf";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { address, email } = data;

    console.log("submit-form.POST: Processing request", {
      address,
      email,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const subject = "New Cash Offer Request - Sell My House Ocala";

    const htmlContent = `
      <h2>New Cash Offer Request</h2>
      <p><strong>Property Address:</strong> ${address}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p>This person is requesting a cash offer for their Ocala property.</p>
      <hr>
      <p><em>This request was submitted through the Sell My House Ocala website.</em></p>
    `;

    const textContent = `
      New Cash Offer Request
      
      Property Address: ${address}
      Email: ${email || "Not provided"}
      
      This person is requesting a cash offer for their Ocala property.
      
      This request was submitted through the Sell My House Ocala website.
    `;

    // Send email
    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // Sending to the same Gmail address
      subject: subject,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to", GMAIL_USER);
    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("submit-form.POST: Failed to process form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
