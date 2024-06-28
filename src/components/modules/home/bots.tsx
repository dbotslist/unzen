import BotCard from "@/components/shared/bot/card";
import ErrorMessage from "@/components/shared/feedback/error";
import LineTitle from "@/components/shared/feedback/line-title";
import type { HomeBotsQuery } from "@/lib/graphql/apollo";
import { Flex, Grid, GridItem } from "@/styled-system/jsx";

interface HomeBotsProps {
	mostBigBots: HomeBotsQuery["mostBig"];
	mostReviewedBots: HomeBotsQuery["mostReviewed"];
	mostVotedBots: HomeBotsQuery["mostVoted"];
}

export default function HomeBots({
	mostVotedBots,
	mostReviewedBots,
	mostBigBots,
}: HomeBotsProps) {
	const totalBots = [mostBigBots, mostReviewedBots, mostVotedBots].reduce(
		(acc, item) => acc + (item?.nodes?.length ?? 0),
		0,
	);

	if (totalBots === 0) return <ErrorMessage>No bots found</ErrorMessage>;

	return (
		<Flex my={5} gap={5} flexDir="column">
			<LineTitle>Most voted</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostVotedBots.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
			<LineTitle>Most big</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostBigBots.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
			<LineTitle>Most reviewed</LineTitle>
			<Grid gridTemplateColumns={{ lg: 4, sm: 2, xl: 4, md: 3 }}>
				{mostReviewedBots.nodes?.map((bot) => (
					<GridItem key={bot.id}>
						<BotCard {...bot} />
					</GridItem>
				))}
			</Grid>
		</Flex>
	);
}
