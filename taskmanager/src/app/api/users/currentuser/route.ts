import validateJwtAndGetUserId from "@/helpers/jwtValidation";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/userModel";
import { connectToMongoDb } from "@/config/dbConfig";

connectToMongoDb();

export const GET = async (request: NextRequest) => {
    try {
        const userId = await validateJwtAndGetUserId(request);

        if (!userId) {
            throw new Error("Not authorized");
        }

        const user = await User.findById(userId).select("-password");

        if (!user) {
            throw new Error("User not found");
        }

        return NextResponse.json({ data: user, }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};
