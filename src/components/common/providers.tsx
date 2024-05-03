"use client";

import { apolloClient } from "@/lib/constants/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<ApolloProvider client={apolloClient}>{children}</ApolloProvider>
			<Toaster theme="dark" richColors closeButton />
		</NextUIProvider>
	);
}
