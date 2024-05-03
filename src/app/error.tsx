"use client";

import { Button } from "@nextui-org/button";
import { IconMoodSadFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NextError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<div className="flex items-center min-h-[80vh] px-6 mx-auto">
			<div className="flex flex-col items-center max-w-sm mx-auto text-center">
				<div className="p-3 text-sm font-medium text-accent-foreground bg-secondary text-secondary-foreground rounded-full">
					<IconMoodSadFilled className="w-7 h-7" />
				</div>
				<h1 className="mt-3 text-2xl font-semibold md:text-3xl">
					Something went wrong...
				</h1>
				<p className="mt-4 text-muted-foreground lg:text-base text-sm">
					You ran into an unknown problem! We are working (or not) to fix this
					:D
				</p>
				<div className="flex items-center mt-6 gap-2 shrink-0 sm:w-auto">
					<Button onClick={router.back} color="secondary">
						Go back
					</Button>
					<Button onClick={reset}>Retry</Button>
				</div>
			</div>
		</div>
	);
}
