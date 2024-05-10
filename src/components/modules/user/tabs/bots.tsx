import BotCard from "@/components/common/cards/bot.normal";
import BotRow from "@/components/common/cards/bot.row";
import ErrorMessage from "@/components/common/feedback/error-message";
import type { BotOwnerObject } from "@/lib/types/apollo";

export default function UserBotsTab({
	username,
	bots,
}: Pick<Partial<BotOwnerObject>, "username" | "bots">) {
	const userBots = bots?.length
		? bots.map((bot, key) => <BotCard {...bot} key={key} />)
		: undefined;
	return userBots ? (
		<BotRow disableHeader>{userBots}</BotRow>
	) : (
		<ErrorMessage isCentered message={`${username} has no bots`} />
	);
}
