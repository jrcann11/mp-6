import {NextResponse} from "next/server";
import {getGoogleAuthURL} from "@/app/lib/googleAuth";

export async function GET() {
    const url = getGoogleAuthURL();
    return NextResponse.redirect(url);
}