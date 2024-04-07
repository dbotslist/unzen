import { apolloClient } from "@/lib/constants/apollo-client";
import type { Mutation } from "@/lib/types/apollo";
import { gql } from "@apollo/client";
import { serialize } from "cookie";
import { type NextRequest, NextResponse } from "next/server";

const createSessionDocument = gql`
mutation CreateSession($input: CreateSessionInput!) {
  createSession(input: $input) {
    access_token
    expires_in
    refresh_token
  }
}
`;

const quickRedirect = (endpoint: string, url: string) =>
	NextResponse.redirect(new URL(endpoint, url));

export async function GET(req: NextRequest) {
	const code = req.nextUrl.searchParams.get("code");

	if (!code)
		return quickRedirect(
			`/?e=${encodeURIComponent("No code provided from Discord")}`,
			req.url,
		);

	const { data: auth } = await apolloClient.mutate<Mutation>({
		mutation: createSessionDocument,
		variables: {
			input: {
				code,
			},
		},
	});

	if (!auth || !auth.createSession.access_token)
		return quickRedirect(
			`/?e=${encodeURIComponent("No access_token provided from Discord")}`,
			req.url,
		);

	const cookie = serialize("session", auth.createSession.access_token, {
		expires: new Date(Date.now() + auth.createSession.expires_in),
		httpOnly: false,
		secure: false,
		path: "/",
	});

	const finalResponse = quickRedirect("/api/auth/result", req.url);
	finalResponse.headers.append("Set-Cookie", cookie);

	return finalResponse;
}
