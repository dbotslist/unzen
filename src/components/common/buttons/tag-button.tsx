"use client";

import { Button, type ButtonProps } from "@nextui-org/button";
import { IconHash } from "@tabler/icons-react";

export default function TagButton({ children, ...props }: ButtonProps) {
	return (
		<Button
			{...props}
			startContent={<IconHash className="w-4 h-4 text-secondary" />}
			size="sm"
		>
			{children}
		</Button>
	);
}
