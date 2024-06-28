"use client";

import { makeClient } from "@/lib/constants/apollo/client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import type React from "react";

interface ApolloWrapperProps {
	children: React.ReactNode;
	token?: string;
}

export function ApolloWrapper({ children, token }: ApolloWrapperProps) {
	return (
		<ApolloNextAppProvider makeClient={() => makeClient(token)}>
			{children}
		</ApolloNextAppProvider>
	);
}
