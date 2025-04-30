import {NextResponse} from "next/server";
import {getGoogleAuthURL} from "@/app/lib/googleAuth";

export async function GET() {
    const url = getGoogleAuthURL(); // Generate the Google sign-in URL
    return NextResponse.redirect(url); // Redirect the user to it
}