import { getTokens, getUserInfo } from "@/app/lib/googleAuth";
import { NextResponse } from "next/server";

// Handles the redirect from Google after authentication.
// It exchanges the authorization code for tokens and fetches user info.
export async function GET(req: Request) {
    // Extract the 'code' parameter from the incoming request's URL
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    // If no authorization code is found, redirect back to the homepage
    if (!code) {
        return NextResponse.redirect("/");
    }

    // Exchange the code for access and refresh tokens
    const tokenResponse = await getTokens(code);
    const { access_token } = tokenResponse;

    // If access token isn't retrieved, redirect back to the homepage
    if (!access_token) {
        return NextResponse.redirect("/");
    }

    // Use the access token to fetch the user's profile information
    const userInfo = await getUserInfo(access_token);

    // Redirect to /about with user info encoded in query parameters
    const aboutUrl = new URL("/about", process.env.PUBLIC_BASE_URL);
    aboutUrl.searchParams.set("name", userInfo.name);
    aboutUrl.searchParams.set("email", userInfo.email);
    aboutUrl.searchParams.set("picture", userInfo.picture);

    return NextResponse.redirect(aboutUrl.toString());
}