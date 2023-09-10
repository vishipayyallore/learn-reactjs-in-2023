import { NextRequest, NextResponse } from "next/server";

export async function GET(requext: NextRequest) {
    try {
        const users = [
            { id: 1, name: "John Doe" },
            { id: 2, name: "Jane Doe" },
        ];
        return NextResponse.json({ data: users, message: "User Lists" },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}