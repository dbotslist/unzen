import Footer from "@/components/common/layout/footer";
import Header from "@/components/common/layout/header";
import { Providers } from "@/components/common/providers";
import { openGraph } from "@/lib/constants/open-graph";
import type { Metadata } from "next";
import { Sora as FontSans } from "next/font/google";

import "@/styles/globals.css";

const font = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: openGraph.title,
	description: openGraph.description,
	openGraph,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en" id="main_element" className="cyan">
			<body className={font.className}>
				<Providers>
					<Header />
					<main className="px-4 sm:px-12 lg:px-32">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
