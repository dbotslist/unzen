"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import Spinner from "../../spinner";
import { LinkButton, buttonIcon, icon } from "@/components/ui/button";
import { Flex } from "@/styled-system/jsx";
import Image from "@/components/ui/image";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Text } from "@/components/ui/text";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { menuAnimation } from "@/lib/constants/animations";
import { menuItem, menuItems } from "@/components/ui/styles/menu";
import {
	ArrowLeftEndOnRectangleIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function AuthUser() {
	const { data: auth, loading } = useAuth();
	return loading ? (
		<Spinner />
	) : auth ? (
		<Flex alignItems={"center"} gap={2}>
			<Menu>
				{({ open }) => (
					<>
						<MenuButton>
							<Image
								alt="user avatar"
								src={getAvatar(auth.me.id, auth.me.avatar)}
								width={36}
								height={36}
								className={css({
									borderRadius: "full",
									cursor: "pointer",
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
									<MenuItem as={"div"} className={menuItem}>
										<Text>Profile</Text>
										<Cog6ToothIcon className={icon()} />
									</MenuItem>
								</MenuItems>
							)}
						</AnimatePresence>
					</>
				)}
			</Menu>
		</Flex>
	) : (
		<LinkButton href="/api/auth/login" size="sm">
			<ArrowLeftEndOnRectangleIcon className={buttonIcon("left", 5)} />
			Login
		</LinkButton>
	);
}