import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest, { params }: any) => {
    try {
        const existingUser = await request.json();

        console.log("PUT /api/users :: Request Received: ", existingUser, " :: User Id: ", params.userid, " :: User Id: ", existingUser.id);

        return NextResponse.json({ data: existingUser, message: `User ${params.userid} Updated`, error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

