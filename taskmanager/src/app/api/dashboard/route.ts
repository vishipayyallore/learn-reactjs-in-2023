import { NextRequest, NextResponse } from "next/server";

import validateJwtAndGetUserId from "@/helpers/jwtValidation";
import Task from "@/models/taskModel";
import { connectToMongoDb } from "@/config/dbConfig";

connectToMongoDb();

export const GET = async (request: NextRequest) => {
    try {
        const userId = await validateJwtAndGetUserId(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });

        return NextResponse.json(tasks, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};



