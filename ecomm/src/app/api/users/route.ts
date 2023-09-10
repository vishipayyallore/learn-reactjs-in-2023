import { NextRequest, NextResponse } from "next/server";

export async function GET(requext: NextRequest) {
    try {
        const users = getUsers();

        return NextResponse.json({ data: users, message: "User Lists", error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

// To be replaced with real data
function getUsers() {
    return [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];
}
