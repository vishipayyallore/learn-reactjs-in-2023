import validateJwtAndGetUserId from "@/helpers/jwtValidation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        const userId = await validateJwtAndGetUserId(request);

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
