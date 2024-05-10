import Loader from "@/components/common/feedback/loader";
import BotDeleteModal from "@/components/common/modals/delete";
import { type BotObject, useDeleteBotMutation } from "@/lib/types/apollo";
import { removeFromCache } from "@/lib/utils/cache";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { IconTransfer, IconTrashFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ManageDangerBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	const router = useRouter();
	const deleteModal = useDisclosure();
	const [deleteBot, { loading: deletingBot }] = useDeleteBotMutation({
		onCompleted: (data) => {
			toast.success(`Deleted ${data.deleteBot.name}, so sad 😢`);
			deleteModal.onClose();
			router.replace("/");
		},
		onError: handleError,
		update: (cache) => removeFromCache(cache, { id, __typename: "BotObject" }),
	});
	return (
		<div className="flex flex-col gap-3">
			<BotDeleteModal
				id={id}
				name={name}
				deleteFn={deleteBot}
				{...deleteModal}
			/>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Delete {name}</CardHeader>
				<CardBody>
					<p>
						Deleting {name} will <strong>permanently</strong> delete all
						information about it (votes, guildCount, etc.)
					</p>
				</CardBody>
				<CardFooter>
					<Button
						spinner={<Loader />}
						isLoading={deletingBot}
						color="danger"
						className="w-fit"
						startContent={<IconTrashFilled className="w-5 h-5" />}
						onClick={deleteModal.onOpen}
					>
						Delete {name}
					</Button>
				</CardFooter>
			</Card>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">
					Transfer ownership
				</CardHeader>
				<CardBody>
					<p>
						Transfer definitive ownership, this will delete you as bot owner
						(will not set you as co-owner)
					</p>
				</CardBody>
				<CardFooter>
					<Button
						isDisabled
						color="danger"
						className="w-fit"
						startContent={<IconTransfer className="w-5 h-5" />}
					>
						Transfer ownership
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
