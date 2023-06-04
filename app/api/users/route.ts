import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function GET() {
	try {
		const data = await prisma.user.findFirst();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(error);
	}
}

export async function POST(request: Request) {
	try {
		const res = await request.json();
		console.log(res);
		const data = await prisma.user.create({
			data: res,
		});
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(error);
	}
}
