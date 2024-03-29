"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	return (
		<NextUIProvider navigate={router.push}>
			{children}
			<Toaster theme="dark" richColors closeButton />
		</NextUIProvider>
	);
}
