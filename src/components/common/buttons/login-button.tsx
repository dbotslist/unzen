"use client";

import { Button, type ButtonProps } from "@nextui-org/button";
import Link from "next/link";
import DiscordIcon from "../icons/discord";

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
