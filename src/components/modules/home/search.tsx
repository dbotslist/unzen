"use client";

import { Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

export default function HomeSearchInput() {
	return (
		<Input
			startContent={<IconSearch className="w-5 h-5 text-default-600" />}
			fullWidth
			placeholder="Search bots in dbots.fun"
		/>
	);
}
