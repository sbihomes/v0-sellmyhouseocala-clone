import { NextResponse } from "next/server"

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { address, email } = data

    console.log("submit-form.POST: Processing request", {
      address,
      email,
    })

    const subject = "New Cash Offer Request for Sell My House Ocala"

    const emailData = {
      personalizations: [
        {
          to: [{ email: "jack@sbihomes.com" }],
          subject: subject,
        },
      ],
      from: { email: "hello@sellmyhouseocala.com", name: "Sell My House Ocala" },
      content: [
        {
          type: "text/plain",
          value: `
            Property Address: ${address}
            Email: ${email || "Not provided"}
            Request: Cash Offer Request
          `,
        },
        {
          type: "text/html",
          value: `
            <h1>New Cash Offer Request</h1>
            <p><strong>Property Address:</strong> ${address}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p>This person is requesting a cash offer for their Ocala property.</p>
          `,
        },
      ],
    }

    console.log("sending data", JSON.stringify(emailData))

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      console.log(JSON.stringify(response))
      throw new Error(`SendGrid API responded with status: ${response.status}`)
    }

    return NextResponse.json({ message: "Form submitted successfully" })
  } catch (error) {
    console.log(JSON.stringify(error))
    console.error("submit-form.POST: Failed to process form:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
