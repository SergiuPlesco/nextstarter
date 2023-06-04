import { NextResponse } from "next/server";
export async function GET() {
	try {
		return NextResponse.json({ greetings: "Hello from server" });
	} catch (error) {
		return NextResponse.json(error);
	}
}
