import type { BotObject } from "@/lib/types/apollo";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

// todo: finish this once webhooks are finished (api)

export default function ManageWebhooksBotTab({
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<div className="flex flex-col gap-3">
			<Card
				classNames={{
					base: "p-2",
					body: "blur pointer-events-none",
					footer: "blur pointer-events-none",
				}}
			>
				<CardHeader className="text-2xl font-bold">Webhook settings</CardHeader>
				<CardBody>
					<p>
						Webhooks are used *commonly* to log/notify whenever someone votes
						for {name}
					</p>
					<form noValidate className="mt-5 flex flex-col gap-4">
						<Input label="Webhook URL" isDisabled />
						<Input label="Webhook secret" isDisabled />
					</form>
				</CardBody>
				<CardFooter>
					<div className="flex justify-end gap-2 w-full">
						<Button type="button" variant="faded">
							Test webhook
						</Button>
						<Button type="button" color="secondary" variant="solid">
							Create
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
