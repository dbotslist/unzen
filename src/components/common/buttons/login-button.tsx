"use client";

import Link from "next/link";
import DiscordIcon from "../icons/discord";
import { type ButtonProps, Button } from "@nextui-org/button";

export default function LoginButton({
	children = "Login",
	...props
}: ButtonProps) {
	return (
		<Button
			{...props}
			startContent={<DiscordIcon className="w-5 h-5" />}
			as={Link}
			href="/api/auth/login"
			color="default"
		>
			{children}
		</Button>
	);
}
