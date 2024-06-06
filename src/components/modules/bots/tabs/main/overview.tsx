import type { SingleBotQuery } from "@/lib/graphql/apollo";
import { TabPanel } from "@headlessui/react";

export default function BotTabOverview({
	description,
}: Pick<SingleBotQuery["getBot"], "description">) {
	return <TabPanel>{description}</TabPanel>;
}
