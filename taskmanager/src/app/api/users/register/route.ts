import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcryptjs";

import userModel from "@/models/userModel";
import { connectToMongoDb } from "@/config/dbConfig";

// Connect to the MongoDB before making any database operations
connectToMongoDb();

export async function POST(request: NextRequest) {
    try {

        // Verify if User exists
        const requestBody = await request.json();
        const userExists = await userModel.exists({ email: requestBody.email });

        if (userExists) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(requestBody.password, salt);

        // You should add your logic here, such as saving data to the database
        // For example, let's assume you want to save a user
        const user = new userModel({
            username: "example",
            email: "example@example.com",
            password: "examplepassword",
        });

        await user.save();

        return NextResponse.json({ message: "Data saved successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
