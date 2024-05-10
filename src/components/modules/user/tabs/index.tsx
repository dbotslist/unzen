import ErrorMessage from "@/components/common/feedback/error-message";
import type { BotOwnerObject } from "@/lib/types/apollo";
import { Tab, Tabs } from "@nextui-org/tabs";
import { IconAppsFilled, IconArchiveFilled } from "@tabler/icons-react";
import UserBotsTab from "./bots";

export default function UserTabs({
	username,
	bots,
}: Pick<Partial<BotOwnerObject>, "username" | "bots">) {
	return (
		<Tabs
			classNames={{
				tabList:
					"gap-6 w-full relative rounded-none p-0 border-b border-divider",
				cursor: "w-full bg-secondary",
				tab: "max-w-fit px-0 h-12",
				tabContent: "group-data-[selected=true]:text-secondary",
				panel: "h-full",
			}}
			variant="underlined"
			aria-label="User tabs"
			disabledKeys={["packs"]}
		>
			<Tab
				key={"bots"}
				title={
					<div className="flex items-center gap-2">
						<IconAppsFilled className="w-5 h-5" />
						Bots
					</div>
				}
			>
				<UserBotsTab bots={bots} username={username} />
			</Tab>
			<Tab
				key={"packs"}
				title={
					<div className="flex items-center gap-2">
						<IconArchiveFilled className="w-5 h-5" />
						Packs
					</div>
				}
			>
				<ErrorMessage isCentered message={`${username} has no packs`} />
			</Tab>
		</Tabs>
	);
}
