"use client";

import AdminPanelBotsTable from "@/components/modules/bot/panel/table";
import {
	BotStatus,
	usePanelBotsQuery,
	useUpdateBotStatusMutation,
} from "@/lib/types/apollo";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Select, SelectItem } from "@nextui-org/select";
import { IconFilterFilled } from "@tabler/icons-react";
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
		fetchPolicy: "cache-and-network",
	});

	const [updateBotStatusMutation, { loading: updating }] =
		useUpdateBotStatusMutation({
			onCompleted: () => {
				refetch({
					input: {
						status,
					},
				});
				toast.success("Changed bot status 👌");
			},
		});

	const updateBotStatus = (id: string, status: BotStatus) => {
		updateBotStatusMutation({
			variables: {
				input: {
					id,
					status,
				},
			},
		});
	};

	return (
		<div className="flex flex-col gap-2 items-start">
			<Breadcrumbs>
				<BreadcrumbItem href="/panel">Panel</BreadcrumbItem>
				<BreadcrumbItem>Bots</BreadcrumbItem>
			</Breadcrumbs>
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
			<AdminPanelBotsTable
				updateBotStatus={updateBotStatus}
				streaming={loading || updating}
				bots={bots}
			/>
		</div>
	);
}
