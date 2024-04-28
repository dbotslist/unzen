import Loader from "@/components/common/feedback/loader";
import LoadingScreen from "@/components/common/layout/loading-screen";
import { type WebhookDTO, webhookResolver } from "@/lib/dtos/webhook";
import {
	type BotObject,
	WebhookEvent,
	WebhookPayloadField,
	useCreateWebhookMutation,
	useUpdateWebhookMutation,
	useWebhookQuery,
} from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

// todo: finish this once webhooks are finished (api)

export default function ManageWebhooksBotTab({
	name,
	id,
}: Pick<BotObject, "id" | "name">) {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<WebhookDTO>({
		resolver: webhookResolver,
		mode: "all",
	});
	const {
		data: webhook,
		loading: gettingWebhook,
		refetch: refetchWebhook,
	} = useWebhookQuery({
		variables: {
			input: {
				id,
			},
		},
		errorPolicy: "ignore",
		onCompleted: (data) => {
			setValue("url", data.getWebhook.url);
			setValue("secret", data.getWebhook.secret);
		},
	});

	const [updateWebhook, { loading: updating }] = useUpdateWebhookMutation({
		onCompleted: () => {
			toast.success("Updated webhook configuration ✨");
			refetchWebhook();
		},
		onError: handleError,
	});

	const [createWebhook, { loading: creating }] = useCreateWebhookMutation({
		onCompleted: () => {
			toast.success("Created webhook configuration ✨");
			refetchWebhook();
		},
		onError: handleError,
	});

	const onSubmit: SubmitHandler<WebhookDTO> = (input) => {
		console.log(input);
		if (webhook)
			updateWebhook({
				variables: {
					input: {
						...input,
						id,
						events: input.events as WebhookEvent[],
						payloadFields: [WebhookPayloadField.User],
					},
				},
			});
		else
			createWebhook({
				variables: {
					input: {
						...input,
						id,
						events: input.events as WebhookEvent[],
						payloadFields: [WebhookPayloadField.User],
					},
				},
			});
	};

	// Custom stuff
	const events = Object.values(WebhookEvent).filter((v) =>
		Number.isNaN(Number(v)),
	) as string[];

	useEffect(() => {
		getValues("events");
	});

	if (gettingWebhook) return <LoadingScreen />;
	return (
		<div className="flex flex-col gap-3">
			<Card classNames={{ base: "p-2" }}>
				<CardHeader className="text-2xl font-bold">Webhook</CardHeader>
				<CardBody>
					<p>
						Webhooks are used *commonly* to log/notify whenever someone votes
						for {name}
					</p>
					<form noValidate className="mt-5 flex flex-col gap-4">
						<Input
							errorMessage={errors.url?.message}
							label="Webhook url"
							description="* Not a Discord URL"
							placeholder="Your custom webhook url"
							{...register("url")}
							isRequired
						/>
						<Input
							errorMessage={errors.secret?.root?.message}
							placeholder="Your webhook authentication secret"
							label="Webhook secret"
							{...register("secret")}
							isRequired
						/>
						<Select
							placeholder="Select your preferred events"
							errorMessage={errors.events?.root?.message}
							isRequired
							selectionMode="multiple"
							label="Events"
							defaultSelectedKeys={webhook?.getWebhook.events ?? []}
							onSelectionChange={(keys) => {
								const values = Array.from(new Set(keys).values()) as string[];
								console.log(values);
								setValue("events", values);
							}}
						>
							{events.map((e) => (
								<SelectItem key={e} value={e}>
									{e}
								</SelectItem>
							))}
						</Select>
					</form>
				</CardBody>
				<CardFooter>
					<div className="flex justify-end gap-2 w-full">
						<Button type="button" variant="faded">
							Test webhook
						</Button>
						<Button
							spinner={<Loader />}
							isLoading={gettingWebhook || creating || updating}
							onClick={handleSubmit(onSubmit)}
							type="submit"
							color="secondary"
							variant="solid"
						>
							{webhook ? "Update" : "Create"}
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
