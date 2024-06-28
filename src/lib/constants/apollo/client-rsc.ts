import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";

export const { getClient } = registerApolloClient(() => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_API_URL,
	});

	const authLink = setContext((_, { headers }) => {
		const session = cookies().get("session");

		return {
			headers: {
				...headers,
				...(headers?.authorization
					? { authorization: headers.authorization }
					: session
						? { authorization: `Bearer ${session.value.toString()}` }
						: {}),
			},
		};
	});

	// use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
	return new ApolloClient({
		// use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
	});
});

export const apolloClient = getClient();
