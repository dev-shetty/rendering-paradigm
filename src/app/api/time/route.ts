import { NextResponse } from "next/server"

export async function GET() {
  const currentDateTime = new Date().toISOString()

  return NextResponse.json({
    dateTime: currentDateTime,
  })
}
