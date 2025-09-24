import { NextResponse } from "next/server"

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  // Return the API key in a way that doesn't expose it directly in client code
  return NextResponse.json({
    scriptUrl: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
  })
}
