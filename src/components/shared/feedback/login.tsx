"use client";

import {
	type ButtonVariants,
	LinkButton,
	buttonIcon,
} from "@/components/ui/button";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import type React from "react";

export default function Login({
	children,
	...props
}: ButtonVariants & React.PropsWithChildren) {
	return (
		<LinkButton href="/api/auth/login" {...props}>
			<ArrowLeftEndOnRectangleIcon className={buttonIcon("left", 5)} />
			{children}
		</LinkButton>
	);
}
