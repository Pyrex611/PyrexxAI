import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // This is a mock endpoint. Integrate with real booking/calendar service in production.
    console.log('Demo booking request', body)
    return NextResponse.json({ ok: true, message: 'Demo request received' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}