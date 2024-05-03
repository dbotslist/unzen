import type { BotObject } from "@/lib/types/apollo";
import { Tab, Tabs } from "@nextui-org/tabs";
import {
	IconAlertCircle,
	IconApiApp,
	IconLink,
	IconWebhook,
} from "@tabler/icons-react";
import React from "react";

import ManageDangerBotTab from "./danger";
import ManageDeveloperBotTab from "./developer";
import ManageVanityBotTab from "./vanity";
import ManageWebhooksBotTab from "./webhooks";

export default function ManageBotTab({
	id,
	name,
}: Pick<BotObject, "id" | "name">) {
	return (
		<React.Fragment>
			<div className="flex flex-col">
				<Tabs
					classNames={{
						panel: "w-full",
						tabContent: "w-full max-w-sm",
					}}
					isVertical
					variant="light"
					color="secondary"
					aria-label="Tabs"
				>
					<Tab
						key="developer"
						title={
							<div className="flex justify-between items-center gap-1">
								Developer <IconApiApp className="w-4 h-4" />
							</div>
						}
					>
						<ManageDeveloperBotTab id={id} />
					</Tab>
					<Tab
						key="webhooks"
						title={
							<div className="flex justify-between items-center gap-1">
								Webhook <IconWebhook className="w-4 h-4" />
							</div>
						}
					>
						<ManageWebhooksBotTab id={id} name={name} />
					</Tab>
					<Tab
						key="vanity"
						title={
							<div className="flex justify-between items-center gap-1">
								Vanity <IconLink className="w-4 h-4" />
							</div>
						}
					>
						<ManageVanityBotTab id={id} />
					</Tab>
					<Tab
						key="danger"
						title={
							<div className="flex justify-between items-center gap-1">
								Danger <IconAlertCircle className="w-4 h-4" />
							</div>
						}
					>
						<ManageDangerBotTab id={id} name={name} />
					</Tab>
				</Tabs>
			</div>
		</React.Fragment>
	);
}
