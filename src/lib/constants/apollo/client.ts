import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
	ApolloClient,
	InMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

export function makeClient(authToken?: string) {
	const httpLink = new HttpLink({
		// this needs to be an absolute url, as relative urls cannot be used in SSR
		uri: process.env.NEXT_PUBLIC_API_URL,
		// you can disable result caching here if you want to
		// (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
		// fetchOptions: { cache: "no-store" },
		// you can override the default `fetchOptions` on a per query basis
		// via the `context` property on the options passed as a second argument
		// to an Apollo Client data fetching hook, e.g.:
		// const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				...(authToken
					? {
							authorization: `Bearer ${authToken}`,
						}
					: {}),
			},
		};
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(
			typeof window === "undefined"
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
					])
				: httpLink,
		),
	});
}
