"use client";

import BotCard from "@/components/common/cards/bot.normal";
import { useHomeBotsSuspenseQuery, type BotObject } from "@/lib/types/apollo";
import { IconDiamondFilled, IconThumbUpFilled } from "@tabler/icons-react";
import { notFound } from "next/navigation";
import BotRow from "../bot/row";

export default function HomeBotsRows() {
	const {
		data: { latest, popular },
		error,
	} = useHomeBotsSuspenseQuery({
		queryKey: "home-bots",
	});

	const latestBotsRow = latest.nodes?.length
		? latest.nodes.map((bot, key) => (
				<BotCard key={key} {...(bot as BotObject)} />
			))
		: undefined;

	const popularBotsRow = popular.nodes?.length
		? popular.nodes.map((bot, key) => (
				<BotCard key={key} {...(bot as BotObject)} />
			))
		: undefined;

	if (error) return notFound();
	return (
		<div className="flex flex-col gap-5">
			<BotRow
				title="Popular"
				subtitle="This month most voted bots"
				icon={<IconDiamondFilled className="w-6 h-6" />}
			>
				{popularBotsRow}
			</BotRow>
			<BotRow
				title="Latest"
				subtitle="Most recent bots"
				icon={<IconThumbUpFilled className="w-6 h-6" />}
			>
				{latestBotsRow}
			</BotRow>
		</div>
	);
}
