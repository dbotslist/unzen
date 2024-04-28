"use client";

import ErrorMessage from "@/components/common/feedback/error-message";
import Loader from "@/components/common/feedback/loader";
import LoadingScreen from "@/components/common/layout/loading-screen";
import { fadeInFromTopAndOutTop } from "@/lib/constants/motion/variants";
import useSessionStore from "@/lib/stores/session";
import {
	useCreateVoteMutation,
	useSingleBotVoteSuspenseQuery,
} from "@/lib/types/apollo";
import { formatDate, handleError, parseAvatar } from "@/lib/utils/common";
import { Avatar, Button } from "@nextui-org/react";
import { IconArrowLeft, IconArrowUp, IconServer } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toast } from "sonner";

export default function Page({ params }: { params: { id: string } }) {
	const { data: auth } = useSessionStore();
	const {
		data: { getBot: bot, canVote: voteData },
		error,
		refetch: refetchAll,
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

	const [createVote, { loading: voting }] = useCreateVoteMutation({
		onCompleted: () => {
			refetchAll();
			toast.success("Voted successfully ✨");
		},
		onError: handleError,
	});

	const canVote = voteData?.canVote ?? false;
	const expiry = voteData?.expires ?? Date.now();

	if (!bot) return <LoadingScreen />;
	if (error || !bot) return notFound();
	return (
		<div className="flex flex-col gap-3 items-center justify-center h-[70vh]">
			{!canVote && auth && (
				<motion.div
					initial="initial"
					animate="enter"
					variants={fadeInFromTopAndOutTop}
					className="max-w-2xl w-full bg-content1 p-4 rounded-large flex flex-col"
				>
					<h1 className="text-xl font-bold">You did it! 🚀</h1>
					<p>Thanks for voting {bot.name}*</p>
					<p className="text-xs mt-2 text-default-600">
						* If {bot.name}'s owner has webhooks configured you{" "}
						<strong>may</strong> get vote rewards.
					</p>
				</motion.div>
			)}
			<div className="max-w-2xl w-full bg-content1 p-4 rounded-large flex justify-between items-center">
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
				{!auth ? (
					<ErrorMessage icon={null} message="You must login to vote" />
				) : !canVote ? (
					<ErrorMessage
						icon={null}
						message={`${formatDate(expiry - Date.now())} to vote again`}
					/>
				) : (
					<Button
						onClick={() => createVote({ variables: { input: { id: bot.id } } })}
						isLoading={voting}
						spinner={<Loader />}
						color="secondary"
					>
						Vote {bot.name}
					</Button>
				)}
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
