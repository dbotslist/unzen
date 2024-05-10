"use client";

import BotVoteButton from "@/components/modules/bot/vote/button";
import BotVoteSuccess from "@/components/modules/bot/vote/success";
import BotVoteSuspense from "@/components/modules/bot/vote/suspense";
import useSessionStore from "@/lib/stores/session";
import { useSingleBotVoteSuspenseQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { IconArrowLeft, IconArrowUp, IconServer } from "@tabler/icons-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth } = useSessionStore();
	const {
		data: { getBot: bot, canVote: voteData },
	} = useSingleBotVoteSuspenseQuery({
		variables: {
			input: {
				id: params.id,
			},
			canVoteInput: {
				id: params.id,
			},
		},
		errorPolicy: "ignore",
	});

	const canVote = (auth && voteData?.canVote) ?? false;
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			<BotVoteSuccess canVote={canVote} />
			<div className="max-w-2xl w-full bg-content1 p-4 rounded-large flex justify-between items-center">
				<Suspense fallback={<BotVoteSuspense />}>
					<div className="flex items-center gap-4">
						<Avatar
							src={parseAvatar(bot.avatar, bot.id)}
							radius="lg"
							className="w-20 h-20"
						/>
						<div className="flex flex-col">
							<h1 className="text-2xl font-bold">{bot.name}</h1>
							<div className="flex gap-3 items-center text-sm text-default-600">
								<div className="flex items-center gap-1">
									<IconArrowUp className="w-4 h-4" />
									{bot.votes.totalCount}
								</div>
								<div className="flex items-center gap-1">
									<IconServer className="w-4 h-4" />
									{bot.guildCount}
								</div>
							</div>
						</div>
					</div>
					<BotVoteButton id={bot.id} canVote={canVote} />
				</Suspense>
			</div>
			<Button
				as={Link}
				href={`/bot/${bot.id}`}
				size="sm"
				startContent={<IconArrowLeft className="w-5 h-5" />}
			>
				Return to {bot.name}
			</Button>
		</div>
	);
}
