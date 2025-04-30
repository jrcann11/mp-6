// Define the Google OAuth2 endpoints for authorization, token exchange, and user info retrieval
const GOOGLE_AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_ENDPOINT = "https://www.googleapis.com/oauth2/v2/userinfo";

// Retrieve environment variables for client credentials and redirect URI
const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;
const redirectUri = process.env.GOOGLE_REDIRECT_URI!;

// Constructs the Google OAuth2 authorization URL with required query parameters.
// This URL is used to redirect users to Google's login/consent screen.
export function getGoogleAuthURL() {
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: "code", // Indicates that we want an authorization code
        scope: "openid email profile", // Requested permissions
        access_type: "offline", // Ensures we get a refresh token
        prompt: "consent", // Always prompt the user for consent
    });

    // Return the full authorization URL
    return `${GOOGLE_AUTH_ENDPOINT}?${params.toString()}`;
}

export async function getTokens(code: string) {
    const body = new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code", // Standard grant type for exchanging code
    });

    const res = await fetch(GOOGLE_TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Required for token request
        },
        body: body.toString(),
    });

    // Return the JSON response containing tokens
    return res.json();
}

// Fetches the user's profile information using the access token.
export async function getUserInfo(accessToken: string) {
    const res = await fetch(GOOGLE_USERINFO_ENDPOINT, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return res.json();
}