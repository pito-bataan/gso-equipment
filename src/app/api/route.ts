import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "./auth/[...nextauth]/options";

export async function GET(request: NextRequest){
    const session = await getServerSession(options)
    console.log("Get API", session);

    return NextResponse.json({authenticated: !!session})
}