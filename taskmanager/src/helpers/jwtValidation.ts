import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const validateJwtAndGetUserId = (request: NextRequest): string => {
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) {
            throw new Error("Not authorized");
        }

        const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);
        return decodedToken?.userId;
    } catch (error: any) {
        throw new Error(error.message);
    }

};

export default validateJwtAndGetUserId;