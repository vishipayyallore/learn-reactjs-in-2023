import { NextRequest, NextResponse } from "next/server";

import Task from "@/models/taskModel";
import { connectToMongoDb } from "@/config/dbConfig";
import validateJwtAndGetUserId from "@/helpers/jwtValidation";

connectToMongoDb();

export const POST = async (request: NextRequest) => {
    try {
        const userId = await validateJwtAndGetUserId(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const requestBody = await request.json();
        requestBody.user = userId;

        await Task.create(requestBody);

        return NextResponse.json({ message: "Task created successfully" }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

