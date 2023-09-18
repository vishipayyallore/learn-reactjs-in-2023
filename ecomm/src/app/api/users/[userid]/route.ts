import { NextRequest, NextResponse } from "next/server";

export async function PUT(requext: NextRequest) {
    try {
        const existingUser = await requext.json();
        console.log("PUT /api/users :: Request Received: ", existingUser);

        return NextResponse.json({ data: existingUser, message: "User Updated", error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

