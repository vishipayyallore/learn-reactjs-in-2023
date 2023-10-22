import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {

    try {
        console.log("middleware Executed for path: ", request.nextUrl.pathname);

        const publicRoutes = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register";

        const token = request.cookies.get('token')?.value;
        console.log("token: ", token);

        if (token && publicRoutes) {
            return NextResponse.redirect(new URL("/", request.nextUrl));
        }

        if (!token && !publicRoutes) {
            return NextResponse.redirect(new URL("/login", request.nextUrl));
        }

        return NextResponse.next();
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export const config = {
    matcher: ["/login", "/register", "/"]
}

export default middleware;