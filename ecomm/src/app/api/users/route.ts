import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

// Function to generate a random GUID
function generateRandomGuid(): string {
    return uuidv4();
}

export async function GET(requext: NextRequest) {
    try {
        // console.log("GET /api/users :: Request Received: ", requext);

        // console.log("GET /api/users :: Request Received: ", requext.nextUrl.searchParams);

        // requext.nextUrl.searchParams.forEach((value, key) => {
        //     console.log(`GET /api/users :: Request Received: ${key} = ${value}`);
        // });

        console.log("GET /api/users :: Request Received: ", requext.nextUrl.searchParams.get("sortBy"));
        console.log("GET /api/users :: Request Received: ", requext.nextUrl.searchParams.get("age"));

        const users = getUsers();

        return NextResponse.json({ data: users, message: "User Lists", error: null, processedAt: new Date().toUTCString() },
            { status: 200 });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({ data: null, message: "Something went wrong", error: error.message, processedAt: new Date().toUTCString() },
            { status: 500 });
    }
}

export async function POST(requext: NextRequest) {
    try {
        const body = await requext.json();
        console.log("POST /api/users :: Request Received: ", body);

        // Generate a random GUID
        const id = generateRandomGuid();

        // Add the 'id' field to the object
        const newUser = { ...body, id };

        return NextResponse.json({ data: newUser, message: "User Created", error: null, processedAt: new Date().toUTCString() },
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
