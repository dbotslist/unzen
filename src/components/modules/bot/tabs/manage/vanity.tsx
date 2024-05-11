import {
	type BotObject,
	VanityType,
	useCreateVanityMutation,
	useGetVanityQuery,
} from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Input } from "@nextui-org/input";
import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ManageVanityBotTab({ id }: Pick<BotObject, "id">) {
	// todo: do a form
	const [vanity, setVanity] = useState<string | null>(null);
	useGetVanityQuery({
		variables: { input: { id } },
		onCompleted: (data) => setVanity(data.getVanity.id),
		errorPolicy: "ignore",
	});

	const [createVanity, { loading: creatingVanity }] = useCreateVanityMutation({
		variables: { input: { targetId: id, id: vanity!, type: VanityType.Bot } },
		onCompleted: () => toast.success("Vanity updated 👌"),
		onError: handleError,
	});
	return (
		<div>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Bot vanity</CardHeader>
				<CardBody>
					<Input
						value={vanity!}
						onChange={(e) => setVanity(e.target.value)}
						label="Vanity"
						labelPlacement="outside"
						placeholder="Your vanity"
						description={
							<div className="flex items-center gap-2">
								<Code color="secondary">/bot/{id}</Code>
								<IconArrowRight className="w-4 h-4" />
								<Code color="secondary">/b/{vanity ?? "vanity"}</Code>
							</div>
						}
					/>
				</CardBody>
				<CardFooter>
					<Button
						onClick={() => createVanity()}
						isLoading={creatingVanity}
						variant="faded"
						className="w-fit"
					>
						Update vanity
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
