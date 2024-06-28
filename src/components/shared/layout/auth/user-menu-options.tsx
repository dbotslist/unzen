"use client";

import Image from "@/components/ui/image";
import { menuItem, menuItems } from "@/components/ui/styles/menu";
import { Text } from "@/components/ui/text";
import { menuAnimation } from "@/lib/constants/animations";
import type { SessionQuery } from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
	ArrowRightStartOnRectangleIcon,
	Cog6ToothIcon,
	PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { redirect } from "next/navigation";

interface UserMenuOptionsProps {
	auth: SessionQuery;
}

export default function UserMenuOptions({ auth }: UserMenuOptionsProps) {
	return (
		<Flex alignItems={"center"} gap={2}>
			<Menu>
				{({ open }) => (
					<>
						<MenuButton>
							<Image
								placeholder="empty"
								alt="user avatar"
								src={getAvatar(auth.me.id, auth.me.avatar)}
								width={36}
								height={36}
								className={css({
									rounded: "full",
									cursor: "pointer",
									w: 10,
									h: 10,
								})}
							/>
						</MenuButton>
						<AnimatePresence>
							{open && (
								<MenuItems
									static
									as={motion.div}
									variants={menuAnimation}
									initial="initial"
									animate="enter"
									exit="exit"
									anchor="bottom end"
									className={menuItems}
								>
									<MenuItem
										as={Link}
										href={`/user/${auth.me.id}`}
										className={menuItem}
									>
										<Cog6ToothIcon />
										<Text>Profile</Text>
									</MenuItem>
									<MenuItem as={Link} href="/bot/new" className={menuItem}>
										<PlusCircleIcon />
										<Text>New bot</Text>
									</MenuItem>
									<MenuItem
										onClick={() => {
											/*logout();*/
											redirect("/");
										}}
										as={"div"}
										className={menuItem}
									>
										<ArrowRightStartOnRectangleIcon />
										<Text>Logout</Text>
									</MenuItem>
								</MenuItems>
							)}
						</AnimatePresence>
					</>
				)}
			</Menu>
		</Flex>
	);
}
