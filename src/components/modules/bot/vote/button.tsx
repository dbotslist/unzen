"use client";

import ErrorMessage from "@/components/common/feedback/error-message";
import Loader from "@/components/common/feedback/loader";
import useSessionStore from "@/lib/stores/session";
import { type BotObject, useCreateVoteMutation } from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

export default function BotVoteButton({
	id,
	canVote,
}: Pick<BotObject, "id"> & { canVote: boolean }) {
	const { data: auth, loading } = useSessionStore();

	const [createVote, { loading: voting }] = useCreateVoteMutation({
		onCompleted: () => {
			toast.success("Voted successfully ✨");
		},
		refetchQueries: ["SingleBotVote"],
		onError: handleError,
	});

	if (loading) return <Loader />;
	if (!auth)
		return <ErrorMessage icon={null} message="You need to login to vote" />;

	return canVote ? (
		<Button
			onClick={() => createVote({ variables: { input: { id } } })}
			isLoading={voting}
			spinner={<Loader />}
			color="secondary"
		>
			Vote now
		</Button>
	) : (
		<ErrorMessage icon={null} message="You have voted this bot" />
	);
}
