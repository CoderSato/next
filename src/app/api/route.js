import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET() {
  return new NextResponse(JSON.stringify({ message: "Hello World" }));
}
