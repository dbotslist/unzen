import Loader from "@/components/common/feedback/loader";
import { type BotObject, useResetApiKeyMutation } from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { IconRefresh } from "@tabler/icons-react";
import { toast } from "sonner";

export default function ManageDeveloperBotTab({ id }: Pick<BotObject, "id">) {
	const [resetApiKey, { loading: resetting, data: apiKey }] =
		useResetApiKeyMutation({
			variables: {
				input: {
					id,
				},
			},
			onCompleted: () => toast.success("Resetted Api Key 🎉"),
			onError: handleError,
		});
	return (
		<div>
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Reset API Key</CardHeader>
				<CardBody>
					<p>
						API Key can only be viewed <strong>once</strong>, so you have to
						reset it everytime you want to see it.
					</p>
					{apiKey?.resetApiKey && (
						<Input
							color="success"
							description="Your new Api Key"
							isReadOnly
							value={apiKey.resetApiKey}
						/>
					)}
				</CardBody>
				<CardFooter>
					<Button
						onClick={() => resetApiKey()}
						variant="faded"
						className="w-fit"
						startContent={
							resetting ? <Loader /> : <IconRefresh className="w-5 h-5" />
						}
					>
						Reset API Key
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
