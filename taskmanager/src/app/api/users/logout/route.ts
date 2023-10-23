import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {

    try {
        const response = NextResponse.json({ message: "User logged out successfully" }, { status: 200 });

        response.cookies.set("token", "", { httpOnly: true, path: "/", maxAge: 0 });

        return response;
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

export default POST;