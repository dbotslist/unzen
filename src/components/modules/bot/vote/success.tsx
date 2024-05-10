import Motion from "@/components/common/motion";
import { fadeInFromTopAndOutTop } from "@/lib/constants/motion/variants";
import type { BotObject } from "@/lib/types/apollo";
import { AnimatePresence } from "framer-motion";

export default function BotVoteSuccess({
	name,
	canVote,
}: Pick<Partial<BotObject>, "name"> & { canVote: boolean }) {
	if (canVote) return null;

	return (
		<AnimatePresence>
			<Motion
				variants={fadeInFromTopAndOutTop}
				className="max-w-2xl w-full bg-content1 p-4 rounded-large flex flex-col gap-2"
			>
				<h1 className="text-xl font-bold">You voted! 👌</h1>
				<p>You successfully voted {name}!</p>
				<p className="text-xs mt-2 text-default-600">
					If {name}'s owner has webhooks configured you <strong>may</strong> get
					vote rewards.
				</p>
			</Motion>
		</AnimatePresence>
	);
}
