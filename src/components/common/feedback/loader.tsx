"use client";

import { cn } from "@nextui-org/react";
import { IconLoader2, type IconProps } from "@tabler/icons-react";

export default function Loader({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<div>
			<IconLoader2
				{...props}
				className={cn("animate-spin", className ?? "h-5 w-5")}
			/>
		</div>
	);
}
