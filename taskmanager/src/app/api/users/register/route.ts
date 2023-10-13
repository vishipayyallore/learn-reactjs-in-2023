import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcryptjs";

import User from "@/models/userModel";
import { connectToMongoDb } from "@/config/dbConfig";

// Connect to the MongoDB before making any database operations
connectToMongoDb();

export async function POST(request: NextRequest) {
    try {

        // Verify if User exists
        const requestBody = await request.json();
        const userExists = await User.exists({ email: requestBody.email });

        if (userExists) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bycrypt.hash(requestBody.password, await bycrypt.genSalt(10));
        requestBody.password = hashedPassword;

        // Save the user to the database
        User.create(requestBody);

        return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
