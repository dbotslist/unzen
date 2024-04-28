"use client";

import ErrorMessage from "@/components/common/feedback/error-message";
import Motion from "@/components/common/motion";
import { fadeInFromBottomAndOutBottom } from "@/lib/constants/motion/variants";
import { Input } from "@nextui-org/react";
import { IconSearch, IconSearchOff } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

export default function HomeSearchInput() {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [query, setQuery] = useState<string | null>(null);
	const [showPopover, setShowPopover] = useState<boolean>(false);

	useClickAway(popoverRef, () => setShowPopover(false));

	useEffect(() => {
		if (query && query?.length >= 1) setShowPopover(true);
		else setShowPopover(false);
	}, [query]);
	return (
		<div className="relative">
			<Input
				onChange={(e) => setQuery(e.currentTarget.value)}
				startContent={<IconSearch className="w-5 h-5 text-default-500" />}
				fullWidth
				placeholder="Search bots in dbots.fun"
			/>
			{showPopover && (
				<div ref={popoverRef}>
					<Motion
						variants={fadeInFromBottomAndOutBottom}
						className="absolute mt-1 w-full z-[100] bg-content1 rounded-medium p-5"
					>
						<div className="flex flex-col gap-2">
							<h3 className="text-xl font-semibold">Search results</h3>
							{/* <LoadingScreen /> */}
							<ErrorMessage
								icon={<IconSearchOff className="w-5 h-5" />}
								message="No results for that query"
								isCentered
							/>
						</div>
					</Motion>
				</div>
			)}
		</div>
	);
}
