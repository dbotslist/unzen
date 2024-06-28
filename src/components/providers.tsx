import { cookies } from "next/headers";
import type React from "react";
import { Toaster } from "sonner";
import { ApolloWrapper } from "./apollo-wrapper";

export default function Providers({ children }: React.PropsWithChildren) {
	const sessionToken = cookies().get("session");

	return (
		<ApolloWrapper token={sessionToken?.value}>
			<Toaster
				toastOptions={{
					style: {
						backgroundColor: "var(--colors-background-900)",
						color: "var(--colors-background-100)",
						borderColor: "var(--colors-background-700)",
					},
				}}
			/>
			{children}
		</ApolloWrapper>
	);
}
