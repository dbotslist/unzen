"use client";

import FallbackAvatar from "@/components/common/feedback/fallback-avatar";
import LoadingScreen from "@/components/common/layout/loading-screen";
import SettingsBotTab from "@/components/modules/bot/tabs/manage";
import OverviewBotTab from "@/components/modules/bot/tabs/overview";
import ReviewsBotTab from "@/components/modules/bot/tabs/reviews";
import { useSession } from "@/lib/hooks/session";
import { type BotObject, useSingleBotSuspenseQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/dropdown";
import { Tab, Tabs } from "@nextui-org/tabs";
import {
	IconArrowUp,
	IconCopyPlusFilled,
	IconDots,
	IconFlag2Filled,
	IconInfoCircleFilled,
	IconMessageCircle2Filled,
	IconPlus,
	IconSettingsFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
	const { data: user } = useSession();
	const {
		data: { getBot: bot },
		error,
	} = useSingleBotSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	const isValidOwner =
		!!bot.owners.find((owner) => owner.id === user?.me.id) ?? false;

	if (!bot) return <LoadingScreen />;
	if (error || !bot) return notFound();
	return (
		<div>
			<div className="w-full h-screen z-[0] absolute pointer-events-none inset-0">
				<Image
					src={parseAvatar(bot.avatar, bot.id)}
					width={1000}
					height={1000}
					alt="bot banner background"
					className="object-cover blur-md object-[center_top] top-0 right-0 bottom-0 left-0 w-screen h-[90vh] max-h-[90vh] opacity-10 gradient-mask-b-0"
					draggable={false}
				/>
			</div>
			<div className="flex flex-col gap-7 z-10">
				<div className="flex lg:flex-row gap-3 flex-col justify-between w-full items-center">
					<div className="flex lg:flex-row flex-col gap-4 items-center">
						<Avatar
							isBordered
							color="secondary"
							fallback={<FallbackAvatar />}
							showFallback
							src={parseAvatar(bot.avatar, bot.id)}
							radius="full"
							className="w-24 h-24"
						/>
						<div className="flex flex-col items-center lg:items-start">
							<h1 className="text-3xl font-bold">{bot.name}</h1>
							<p className="text-sm lg:text-left text-center text-default-600">
								{bot.shortDescription}
							</p>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-2 w-full lg:w-fit">
						<Button
							fullWidth
							startContent={<IconPlus className="w-6 h-6" />}
							size="lg"
							color="secondary"
						>
							Invite
						</Button>
						<Button
							as={Link}
							href={`/bot/${bot.id}/vote`}
							fullWidth
							startContent={<IconArrowUp className="w-6 h-6" />}
							size="lg"
						>
							Vote
						</Button>
						<Dropdown showArrow placement="bottom-end">
							<DropdownTrigger>
								<Button className="lg:flex hidden" isIconOnly size="lg">
									<IconDots className="w-6 h-6" />
								</Button>
							</DropdownTrigger>
							<DropdownMenu variant="faded" aria-label="Static Actions">
								<DropdownItem
									startContent={<IconCopyPlusFilled className="w-5 h-5" />}
								>
									Copy ID
								</DropdownItem>
								<DropdownItem
									startContent={<IconFlag2Filled className="w-5 h-5" />}
									className="text-danger"
									color="danger"
								>
									Report {bot.name}
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className="w-full">
					<Tabs
						className="w-full"
						variant="underlined"
						aria-label="Bot tabs"
						classNames={{
							tabList:
								"gap-6 w-full relative rounded-none p-0 border-b border-divider",
							cursor: "w-full bg-secondary",
							tab: "max-w-fit px-0 h-12",
							tabContent: "group-data-[selected=true]:text-secondary",
							panel: "h-full",
						}}
					>
						<Tab
							key="overview"
							title={
								<div className="flex items-center gap-2">
									<IconInfoCircleFilled className="w-4 h-4" /> Overview
								</div>
							}
						>
							<OverviewBotTab {...(bot as BotObject)} />
						</Tab>
						<Tab
							key="reviews"
							title={
								<div className="flex items-center gap-2">
									<IconMessageCircle2Filled className="w-4 h-4" /> Reviews
								</div>
							}
						>
							<ReviewsBotTab />
						</Tab>
						{isValidOwner && (
							<Tab
								key="settings"
								title={
									<div className="flex items-center gap-2">
										<IconSettingsFilled className="w-4 h-4" /> Settings
									</div>
								}
							>
								<SettingsBotTab name={bot.name} id={bot.id} />
							</Tab>
						)}
					</Tabs>
				</div>
			</div>
		</div>
	);
}
