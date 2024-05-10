"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import useSessionStore from "@/lib/stores/session";
import { Button } from "@nextui-org/button";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

export default function Page() {
	const { data: auth, loading } = useSessionStore();
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 5_000);
	});

	if (loading) return <LoadingScreen />;
	return (
		<div className="flex flex-col justify-center items-center h-[50vh]">
			<div className="flex flex-col gap-2 items-center">
				{auth ? (
					<React.Fragment>
						<IconCheck className="w-12 h-12 text-success" />
						<h2 className="text-2xl font-semibold">Success</h2>
					</React.Fragment>
				) : (
					<React.Fragment>
						<IconX className="w-12 h-12 text-success" />
						<h2 className="text-2xl font-semibold">Something happened</h2>
					</React.Fragment>
				)}
				<h2 className="text-xl font-normal">
					You will be redirected automatically...
				</h2>
				<Button onClick={() => router.replace("/")}>Go now</Button>
			</div>
		</div>
	);
}
