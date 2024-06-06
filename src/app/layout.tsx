import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";

import "@/styles/globals.css";
import Providers from "@/components/providers";
import { Container } from "@/styled-system/jsx";
import Header from "@/components/shared/layout/header";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dbots.fun | The Discord botlist",
	description: "Discover new bots everyday for all community sizes.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<Header />
					<Container py={11}>{children}</Container>
				</Providers>
			</body>
		</html>
	);
}
