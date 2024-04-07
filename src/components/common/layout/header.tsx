"use client";

import { useSession } from "@/lib/hooks/session";
import {
	Divider,
	Image,
	Navbar,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import BrandLogo from "@public/dbots-white_256x256.png";
import Link from "next/link";
import LoginButton from "../buttons/login-button";
import Loader from "../loader";
import HeaderAuthUser from "./auth/user";
import ColorThemeChanger from "./theme/theme-changer";

export default function Header() {
	const { data: session, loading: gettingSession } = useSession();
	return (
		<Navbar shouldHideOnScroll className="mb-10 w-full" maxWidth="xl">
			<NavbarContent
				className="hidden sm:flex gap-4 items-center"
				justify="start"
			>
				<NavbarItem
					as={Link}
					href={"/"}
					className="font-semibold flex items-center hover:opacity-70 group duration-150 text-xl"
				>
					<Image
						src={BrandLogo.src}
						className="w-8 h-8 mr-1 group-active:scale-90 duration-[1ms]"
					/>{" "}
					discord<span className="text-secondary font-extrabold">bots</span>
				</NavbarItem>
				<Divider orientation="vertical" className="h-10 rotate-12 mx-2" />
				<NavbarItem>
					<Link color="foreground" href="/explore">
						Explore
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="flex items-center gap-3">
					<ColorThemeChanger />
					{gettingSession ? (
						<Loader />
					) : session ? (
						<HeaderAuthUser {...session.me} />
					) : (
						<LoginButton />
					)}
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
