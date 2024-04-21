"use client";

import { Button } from "@nextui-org/react";
import { IconUserOff } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function UserNotFound() {
	const router = useRouter();

	return (
		<div className="flex items-center min-h-[80vh] px-6 mx-auto">
			<div className="flex flex-col items-center max-w-sm mx-auto text-center">
				<div className="p-3 text-sm font-medium text-accent-foreground bg-secondary text-secondary-foreground rounded-full">
					<IconUserOff className="w-7 h-7" />
				</div>
				<h1 className="mt-3 text-2xl font-semibold md:text-3xl">
					User not found
				</h1>
				<p className="mt-4 text-muted-foreground lg:text-base text-sm">
					Maybe this user doesn't exists
				</p>
				<div className="flex items-center mt-6 gap-2 shrink-0 sm:w-auto">
					<Button onClick={router.back} color="secondary">
						Go back
					</Button>
					<Button onClick={router.refresh}>Retry</Button>
				</div>
			</div>
		</div>
	);
}
