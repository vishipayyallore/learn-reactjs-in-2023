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

        const dashboardData = {
            totalTasks: tasks.length,

            // Status
            openTasks: tasks.filter(task => task.status === 'open').length,
            inProgressTasks: tasks.filter(task => task.status === 'in-progress').length,
            closedTasks: tasks.filter(task => task.status === 'closed').length,

            // Priority
            lowPriorityTasks: tasks.filter(task => task.priority === 'low').length,
            mediumPriorityTasks: tasks.filter(task => task.priority === 'medium').length,
            highPriorityTasks: tasks.filter(task => task.priority === 'high').length,
            urgentPriorityTasks: tasks.filter(task => task.priority === 'urgent').length,
        };

        return NextResponse.json(dashboardData, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};



