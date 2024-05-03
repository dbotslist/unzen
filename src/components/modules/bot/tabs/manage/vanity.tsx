import type { BotObject } from "@/lib/types/apollo";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
} from "@nextui-org/react";

export default function ManageVanityBotTab({ id: _id }: Pick<BotObject, "id">) {
	return (
		<div>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Bot vanity</CardHeader>
				<CardBody>
					<p>
						You can set a vanity for your bot, so people can easily find your
						bot. This vanity will be used in the bot link.
					</p>
					<Input placeholder="E.g: elyam" />
				</CardBody>
				<CardFooter>
					<Button variant="faded" className="w-fit">
						Update vanity
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
