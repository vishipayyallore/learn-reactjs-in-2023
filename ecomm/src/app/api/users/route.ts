import { connectToMongoDb } from "@/config/dbConfig";
import { UserModel } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

connectToMongoDb();

// Function to generate a random GUID
function generateRandomGuid(): string {
    return uuidv4();
}

export const GET = async (request: NextRequest) => {
    try {
        // console.log("GET /api/users :: Request Received: ", requext);

        // console.log("GET /api/users :: Request Received: ", requext.nextUrl.searchParams);

        // requext.nextUrl.searchParams.forEach((value, key) => {
        //     console.log(`GET /api/users :: Request Received: ${key} = ${value}`);
        // });

        // const users = getUsers();

        console.log("GET /api/users :: Request Received: ", request.nextUrl.searchParams.get("sortBy"));
        console.log("GET /api/users :: Request Received: ", request.nextUrl.searchParams.get("age"));

        const searchParams = request.nextUrl.searchParams;
        const filters: any = {};

        if (searchParams.has("name")) {
            filters.name = searchParams.get("name");
        }

        if (searchParams.has("age")) {
            filters.age = searchParams.get("age");
        }

        const users = await UserModel.find(filters);

        return NextResponse.json({ data: users, message: "User Lists", error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        console.log("POST /api/users :: Request Received: ", body);

        const newUser = new UserModel(body);

        const savedUser = await newUser.save();

        return NextResponse.json({ data: savedUser, message: "User Created", error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

// To be replaced with real data
const getUsers = () => {
    return [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];
}


// // Generate a random GUID
// const id = generateRandomGuid();

// // Add the 'id' field to the object
// const newUser = { ...body, id };
