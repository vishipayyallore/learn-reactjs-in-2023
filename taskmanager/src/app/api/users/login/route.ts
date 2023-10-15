import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "@/models/userModel";
import { connectToMongoDb } from "@/config/dbConfig";

// Connect to the MongoDB before making any database operations
connectToMongoDb();

export const POST = async (request: NextRequest) => {
    try {

        // Verify if User exists
        const requestBody = await request.json();
        const userExists = await User.exists({ email: requestBody.email });

        if (!userExists) {
            throw new Error("User does not exist");
        }

        const passwordMatches = await bycrypt.compare(requestBody.password, userExists.password);

        if(!passwordMatches) {
            throw new Error("Invalid credentials");
        }

        // Create a JWT token
        const jwtToken = jwt.sign({ userId: userExists._id }, process.env.JWT_SECRET!, { expiresIn: "7d" });

        return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
