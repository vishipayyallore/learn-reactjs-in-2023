import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};



