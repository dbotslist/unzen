"use client";

import { Button } from "@nextui-org/button";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from "@nextui-org/dropdown";
import { cn } from "@nextui-org/system";
import { IconCircleFilled, IconPaintFilled } from "@tabler/icons-react";
import { useEffect } from "react";
import { useLocalStorage } from "react-use";

const visibleColors = [
	{
		name: "Cyan",
		value: "cyan",
	},
	{
		name: "Pink",
		value: "pink",
	},
	{
		name: "Green",
		value: "green",
	},
	{
		name: "Rose",
		value: "rose",
	},
	{
		name: "Purple",
		value: "purple",
	},
	{
		name: "Orange",
		value: "orange",
	},
	{
		name: "Rosé Pine",
		value: "rose-pine",
	},
	{
		name: "Rosé Pine (Moon)",
		value: "rose-pine-moon",
	},
];

// Color theme changer (WIP)
export default function ColorThemeChanger() {
	const [activeColor, setActiveColor] = useLocalStorage(
		"color",
		visibleColors[0].value,
	);

	useEffect(() => {
		document
			.getElementById("main_element")
			?.setAttribute("class", activeColor ?? visibleColors[0].value);
	}, [activeColor]);
	return (
		<Dropdown
			closeOnSelect={false}
			placement="bottom-end"
			showArrow
			radius="sm"
			offset={15}
		>
			<DropdownTrigger>
				<Button
					isIconOnly
					variant="bordered"
					className="w-11 h-11"
					radius="full"
				>
					<IconPaintFilled className="w-5 h-5" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				onAction={(key) => setActiveColor(key.toString())}
				variant="faded"
				aria-label="Theme changer"
			>
				<DropdownSection title={"Color themes"}>
					{visibleColors.map((color) => (
						<DropdownItem
							key={color.value}
							className={
								activeColor === color.value
									? "bg-secondary hover:!bg-secondary !text-secondary-foreground"
									: "bg-default"
							}
							startContent={
								<IconCircleFilled
									className={cn(
										"w-5 h-5 text-secondary rounded-full ring-2 ring-content1",
										color.value,
									)}
								/>
							}
						>
							{color.name}
						</DropdownItem>
					))}
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
}
