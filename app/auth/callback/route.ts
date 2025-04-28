import { getTokens, getUserInfo } from "@/app/lib/googleAuth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.redirect("/");
    }

    const tokenResponse = await getTokens(code);
    const { access_token } = tokenResponse;

    if (!access_token) {
        return NextResponse.redirect("/");
    }

    const userInfo = await getUserInfo(access_token);

    // Redirect to /about with user info encoded in query parameters
    const aboutUrl = new URL("/about", process.env.PUBLIC_BASE_URL);
    aboutUrl.searchParams.set("name", userInfo.name);
    aboutUrl.searchParams.set("email", userInfo.email);
    aboutUrl.searchParams.set("picture", userInfo.picture);

    return NextResponse.redirect(aboutUrl.toString());
}