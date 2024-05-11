import {
	VanityType,
	useCreateVanityMutation,
	useGetVanityQuery,
	type BotObject,
} from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { toast } from "sonner";

export default function ManageVanityBotTab({ id }: Pick<BotObject, "id">) {
	const [vanity, setVanity] = useState<string | null>(null);
	useGetVanityQuery({
		variables: { input: { id } },
		onCompleted: (data) => setVanity(data.getVanity.id),
		errorPolicy: "ignore",
	});

	const [createVanity, { loading: creatingVanity }] = useCreateVanityMutation({
		onCompleted: () => toast.success("Vanity updated 👌"),
		onError: handleError,
	});
	return (
		<div>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Bot vanity</CardHeader>
				<CardBody>
					<Input
						onChange={(e) => setVanity(e.currentTarget.value)}
						label="Vanity"
						labelPlacement="outside"
						placeholder="Your vanity"
						description={`E.g: /bot/${id} -> /b/${vanity ?? "akashi"}`}
					/>
				</CardBody>
				<CardFooter>
					<Button
						onClick={() =>
							createVanity({
								variables: {
									input: { targetId: id, id: vanity!, type: VanityType.Bot },
								},
							})
						}
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
