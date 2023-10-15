import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcryptjs";

import User from "@/models/userModel";
import { connectToMongoDb } from "@/config/dbConfig";

// Connect to the MongoDB before making any database operations
connectToMongoDb();

export const POST = async (request: NextRequest) => {
    try {

        // Verify if User exists
        const requestBody = await request.json();
        const userExists = await User.exists({ email: requestBody.email });

        if (userExists) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash the password
        requestBody.password = await bycrypt.hash(requestBody.password, await bycrypt.genSalt(10));

        // Save the user to the database
        await User.create(requestBody);

        return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
