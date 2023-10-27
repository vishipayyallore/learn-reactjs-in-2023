import { NextRequest, NextResponse } from "next/server";

import Task from "@/models/taskModel";
import { connectToMongoDb } from "@/config/dbConfig";
import validateJwtAndGetUserId from "@/helpers/jwtValidation";

connectToMongoDb();

export const GET = async (request: NextRequest, { params }: { params: { taskid: string } }) => {
    try {
        const userId = await validateJwtAndGetUserId(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const task = await Task.findOne({ user: userId, _id: params.taskid });

        return NextResponse.json(task, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

export const PUT = async (request: NextRequest, { params }: { params: { taskid: string } }) => {
    try {
        const userId = await validateJwtAndGetUserId(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const requestBody = await request.json();

        const task = await Task.findOneAndUpdate({ user: userId, _id: params.taskid }, requestBody, { new: true });

        return NextResponse.json(task, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

export const DELETE = async (request: NextRequest, { params }: { params: { taskid: string } }) => {
    try {
        const userId = await validateJwtAndGetUserId(request);
        if (!userId) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await Task.findOneAndDelete({ user: userId, _id: params.taskid });

        return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

