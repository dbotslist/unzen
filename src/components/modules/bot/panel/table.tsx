import LoadingScreen from "@/components/common/layout/loading-screen";
import { BotStatus, type PanelBotsQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { IconCheck, IconX } from "@tabler/icons-react";

interface AdminPanelBotsTableProps {
	streaming: boolean;
	updateBotStatus: (id: string, status: BotStatus) => void;
	bots?: PanelBotsQuery;
}

export default function AdminPanelBotsTable({
	streaming,
	bots,
	updateBotStatus,
}: AdminPanelBotsTableProps) {
	return (
		<Table
			removeWrapper
			bottomContent={streaming ? <LoadingScreen /> : undefined}
			aria-label="Admin panel bots table"
		>
			<TableHeader>
				<TableColumn>NAME</TableColumn>
				<TableColumn>OWNER</TableColumn>
				<TableColumn>STATUS</TableColumn>
				<TableColumn>ACTIONS</TableColumn>
			</TableHeader>
			<TableBody emptyContent="No bots found" isLoading={streaming}>
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
											src: parseAvatar(bot.owners[0].avatar, bot.owners[0].id),
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
										onClick={() => updateBotStatus(bot.id, BotStatus.Approved)}
										size="sm"
										color="success"
										isIconOnly
										startContent={<IconCheck className="w-5 h-5" />}
									/>
									<Button
										variant="bordered"
										isDisabled={bot.status === BotStatus.Denied}
										onClick={() => updateBotStatus(bot.id, BotStatus.Denied)}
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
	);
}
