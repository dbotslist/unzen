"use client";

import Login from "@/components/shared/feedback/login";
import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ErrorText } from "@/components/ui/error-text";
import { popUpAnimation } from "@/lib/constants/animations";
import {
	type SessionQuery,
	type SingleBotVoteQuery,
	useCreateVoteMutation,
} from "@/lib/graphql/apollo";
import { handleError } from "@/lib/utils/format";
import { ClockIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface VoteProps {
	auth: SessionQuery | null;
	botId: string;
	hasVoted: boolean;
}

export default function Vote({ auth, botId, hasVoted }: VoteProps) {
	const [voteBot, { loading: votingBot }] = useCreateVoteMutation({
		onError: handleError,
		onCompleted: () => {
			if (auth) redirect(`/bots/${botId}/vote`);
			toast.success("Successfully voted!");
		},
	});

	if (!auth) {
		return <Login>Login to vote</Login>;
	}

	if (hasVoted) {
		return <ErrorText>Come back tomorrow</ErrorText>;
	}

	return (
		<Button
			disabled={votingBot}
			onClick={() => voteBot({ variables: { input: { id: botId } } })}
		>
			Vote
		</Button>
	);
}

interface VoteTitleProps {
	canVote: boolean;
	bot: SingleBotVoteQuery["getBot"];
}

export function VoteTitle({ canVote, bot }: VoteTitleProps) {
	return (
		<AnimatePresence>
			{!canVote && (
				<motion.div
					variants={popUpAnimation}
					animate="enter"
					initial="initial"
					exit="exit"
				>
					<Alert>
						<AlertIcon>
							<ClockIcon />
						</AlertIcon>
						<AlertContent>
							<AlertTitle>Your vote on {bot.name} is registered!</AlertTitle>
							<AlertDescription>
								You will be able to vote again tomorrow!
							</AlertDescription>
						</AlertContent>
					</Alert>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
