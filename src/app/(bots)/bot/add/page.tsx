"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { type SubmitBotDTO, submitBotResolver } from "@/lib/dtos/submit-bot";
import { useCreateBotMutation } from "@/lib/types/apollo";
import { handleError } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { IconReload, IconSend } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Page() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SubmitBotDTO>({
		resolver: submitBotResolver,
	});
	const [create, { loading: creating }] = useCreateBotMutation({
		onCompleted: (data) => {
			toast.success(`Submitted ${data.createBot.name} successfully 🚀`);
			router.replace("/");
		},
		onError: handleError,
	});

	const onSubmit: SubmitHandler<SubmitBotDTO> = (input) => {
		create({
			variables: {
				input: {
					...input,
					tags: input.tags.split(","),
					prefix: input.prefix?.length! >= 1 ? input.prefix : undefined,
				},
			},
		});
	};

	if (creating) return <LoadingScreen />;
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="mx-auto max-w-2xl w-full p-5 bg-content1 text-content1-foreground flex flex-col gap-5 lg:gap-3 rounded-xl"
		>
			<h1 className="text-3xl font-bold">
				Submit your bot
				<span className="text-xs text-default-600 font-normal ml-1">
					Labels marked with <span className="text-danger">*</span> are strictly
					required
				</span>
			</h1>
			<Input
				errorMessage={errors.id?.message}
				label="Your bot ID"
				description="Get it from the Discord Developer Portal"
				{...register("id")}
				isRequired
			/>
			<Textarea
				errorMessage={errors.shortDescription?.message}
				description="Min 25, max 100"
				label="A short description"
				{...register("shortDescription")}
				isRequired
			/>
			<Input
				errorMessage={errors.prefix?.message}
				label="Your bot prefix"
				description="Leaving this field in blank will set the prefix as 'Slash commands'"
				{...register("prefix")}
			/>
			<div className="flex flex-col gap-1">
				<Textarea
					errorMessage={errors.description?.message}
					description="Min 100, max 5000 (Markdown is recommended)"
					label="A long description"
					rows={10}
					disableAnimation
					classNames={{
						input: "resize-y min-h-[40px]",
					}}
					disableAutosize
					{...register("description")}
					isRequired
				/>
			</div>
			<Select
				errorMessage={errors.tags?.message}
				{...register("tags")}
				label="Select at least 1 tag"
				selectionMode="multiple"
			>
				<SelectItem key={"Fun"} value={"Fun"}>
					Fun
				</SelectItem>
				<SelectItem key={"Moderation"} value={"Moderation"}>
					Moderation
				</SelectItem>
			</Select>
			<div className="flex justify-between">
				<Button
					color="default"
					variant="faded"
					className="group"
					onClick={() => reset()}
					startContent={
						<IconReload className="w-5 h-5 duration-150 group-hover:translate-x-6 group-hover:rotate-180" />
					}
					type="button"
				>
					<span className="group-hover:translate-x-14 duration-150">Reset</span>
				</Button>
				<Button
					color="secondary"
					className="group"
					startContent={
						<IconSend className="w-5 h-5 duration-150 group-hover:translate-x-6" />
					}
					type="submit"
				>
					<span className="group-hover:translate-x-14 duration-150">Send</span>
				</Button>
			</div>
		</form>
	);
}
