"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import {
	BotStatus,
	usePanelBotsQuery,
	useUpdateBotStatusMutation,
} from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	User,
	Chip,
	Button,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { IconCheck, IconFilterFilled, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
	const [status, setStatus] = useState<BotStatus>(BotStatus.Pending);
	const {
		data: bots,
		loading,
		refetch,
	} = usePanelBotsQuery({
		variables: {
			input: {
				status,
			},
		},
	});
	const [updateBotStatus, { loading: updating }] = useUpdateBotStatusMutation({
		onCompleted: () => {
			toast.success("Changed bot status 👌");
			refetch();
		},
	});

	return (
		<div className="flex flex-col gap-2 items-start">
			<div className="flex justify-between items-center w-full">
				<p className="text-default-600">
					Seeing {bots?.panelBots.totalCount ?? 0}{" "}
					{status.toLowerCase() ?? "approved"} bots
				</p>
				<div className="max-w-[12em] w-full">
					<Select
						selectorIcon={<IconFilterFilled className="w-5 h-5" />}
						disableSelectorIconRotation
						disallowEmptySelection
						defaultSelectedKeys={new Set([status])}
						onChange={(e) => setStatus(e.target.value as BotStatus)}
					>
						<SelectItem key={BotStatus.Approved} value={BotStatus.Approved}>
							Approved
						</SelectItem>
						<SelectItem key={BotStatus.Denied} value={BotStatus.Denied}>
							Denied
						</SelectItem>
						<SelectItem key={BotStatus.Pending} value={BotStatus.Pending}>
							Pending
						</SelectItem>
					</Select>
				</div>
			</div>
			<Table
				removeWrapper
				bottomContent={updating || loading ? <LoadingScreen /> : undefined}
				aria-label="Example static collection table"
			>
				<TableHeader>
					<TableColumn>NAME</TableColumn>
					<TableColumn>OWNER</TableColumn>
					<TableColumn>STATUS</TableColumn>
					<TableColumn>ACTIONS</TableColumn>
				</TableHeader>
				<TableBody isLoading={updating || loading}>
					{bots?.panelBots.nodes
						? bots?.panelBots.nodes.map((bot, key) => (
								<TableRow key={key}>
									<TableCell>
										<User
											avatarProps={{ src: parseAvatar(bot.avatar, bot.id) }}
											name={bot.name}
										/>
									</TableCell>
									<TableCell>
										<User
											avatarProps={{
												src: parseAvatar(
													bot.owners[0].avatar,
													bot.owners[0].id,
												),
											}}
											name={bot.owners[0].username}
										/>
									</TableCell>
									<TableCell>
										<Chip
											size="sm"
											variant="bordered"
											color={
												bot.status === BotStatus.Approved
													? "success"
													: bot.status === BotStatus.Denied
														? "danger"
														: "warning"
											}
										>
											{bot.status}
										</Chip>
									</TableCell>
									<TableCell className="flex gap-1">
										<Button
											variant="bordered"
											isDisabled={bot.status === BotStatus.Approved}
											onClick={() =>
												updateBotStatus({
													variables: {
														input: { id: bot.id, status: BotStatus.Approved },
													},
												})
											}
											size="sm"
											color="success"
											isIconOnly
											startContent={<IconCheck className="w-5 h-5" />}
										/>
										<Button
											variant="bordered"
											isDisabled={bot.status === BotStatus.Denied}
											onClick={() =>
												updateBotStatus({
													variables: {
														input: { id: bot.id, status: BotStatus.Denied },
													},
												})
											}
											size="sm"
											color="danger"
											isIconOnly
											startContent={<IconX className="w-5 h-5" />}
										/>
									</TableCell>
								</TableRow>
							))
						: []}
				</TableBody>
			</Table>
		</div>
	);
}
