import { SessionClientDocument } from "@/app/api/auth/callback/route";
import Vote, { VoteTitle } from "@/components/modules/bots/vote";
import CertifiedBadge from "@/components/shared/bot/certified-badge";
import { Alert, AlertIcon, AlertTitle } from "@/components/ui/alert";
import { LinkButton } from "@/components/ui/button";
import { buttonIcon } from "@/components/ui/button-icon";
import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { box } from "@/components/ui/styles/box";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import {
	CanVoteDocument,
	type CanVoteQuery,
	type CanVoteQueryVariables,
	type SessionQuery,
	SingleBotVoteDocument,
	type SingleBotVoteQuery,
	type SingleBotVoteQueryVariables,
} from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Center, Flex } from "@/styled-system/jsx";
import {
	ArrowLeftIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
	const {
		data: { getBot },
		error: getBotError,
	} = await apolloClient.query<SingleBotVoteQuery, SingleBotVoteQueryVariables>(
		{
			query: SingleBotVoteDocument,
			variables: {
				input: {
					id: params.id,
				},
			},
		},
	);

	const {
		data: { canVote },
		error: canVoteError,
	} = await apolloClient.query<CanVoteQuery, CanVoteQueryVariables>({
		query: CanVoteDocument,
		fetchPolicy: "no-cache",
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	const auth = apolloClient.readQuery<SessionQuery>({
		query: SessionClientDocument,
	});

	if (getBotError || canVoteError) return notFound();

	return (
		<Center>
			<Flex w="full" maxW={"md"} flexDir={"column"} gap={3}>
				<Alert>
					<AlertIcon>
						<InformationCircleIcon />
					</AlertIcon>
					<AlertTitle>This page is work-in-progress</AlertTitle>
				</Alert>
				<VoteTitle canVote={canVote.canVote} bot={getBot} />
				<Box className={box}>
					<Flex alignItems={"center"} justifyContent={"space-between"}>
						<Flex alignItems={"center"} gap={3}>
							<Image
								alt="bot avatar"
								width={200}
								height={200}
								src={getAvatar(getBot.id, getBot.avatar)}
								className={css({ rounded: "xl", w: 14, h: 14 })}
							/>
							<Flex alignItems={"center"} gap={1}>
								<Heading size="2xl">{getBot.name}</Heading>
								{getBot.certified && <CertifiedBadge />}
							</Flex>
						</Flex>
						<Vote botId={params.id} auth={auth} hasVoted={!canVote.canVote} />
					</Flex>
				</Box>
				<LinkButton href={`/bot/${getBot.id}`} mx="auto" size="sm" color="gray">
					<ArrowLeftIcon className={buttonIcon("left", 5)} />
					Return to {getBot.name}
				</LinkButton>
			</Flex>
		</Center>
	);
}
