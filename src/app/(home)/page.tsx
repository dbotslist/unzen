"use client";

import TagButton from "@/components/common/buttons/tag-button";
import BotCard from "@/components/common/cards/bot.normal";
import BotRow from "@/components/modules/bot/row";
import { type BotObject, useHomeBotsQuery } from "@/lib/types/apollo";
import { Input } from "@nextui-org/react";
import {
	IconDiamondFilled,
	IconSearch,
	IconThumbUpFilled,
} from "@tabler/icons-react";

export default function Page() {
	const { data: bots } = useHomeBotsQuery(); // todo: make a single query that fetchs "tags" and "bots"

	const latestBotsRow = bots?.latest.nodes?.length
		? bots.latest.nodes.map((bot, key) => (
				<BotCard key={key} {...(bot as BotObject)} />
			))
		: undefined;

	const popularBotsRow = bots?.popular.nodes?.length
		? bots.popular.nodes.map((bot, key) => (
				<BotCard key={key} {...(bot as BotObject)} />
			))
		: undefined;

	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between w-full max-h-72 ">
				<div className="max-w-3xl w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl font-black">
							dbots<span className="text-secondary">.fun</span>
						</h1>
						<p className="text-sm text-default-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							magni nam omnis! Voluptas cumque neque sunt? Itaque tempore cum
							incidunt alias, ipsa unde autem qui magni et hic cumque quae.
						</p>
						<Input
							isClearable
							startContent={<IconSearch className="w-5 h-5" />}
							variant="bordered"
							color="secondary"
							className="w-full"
							placeholder={"Search through 100 bots"}
						/>
						<div className="flex flex-wrap gap-1">
							<TagButton>Gaming</TagButton>
							<TagButton>Music</TagButton>
							<TagButton>Social</TagButton>
						</div>
					</div>
				</div>
				<div className="z-[2] gradient-mask-b-0 xl:flex hidden">
					<div className="grid grid-cols-5 gap-3 opacity-60">
						{[...Array(15)].map((_, index) => (
							<div key={index} className="w-20 h-20 rounded-xl bg-secondary" />
						))}
					</div>
				</div>
			</div>
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
