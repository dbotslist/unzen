import { Heading } from "@/components/ui/heading";
import Image from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import {
	GetUserDocument,
	type GetUserQuery,
	type GetUserQueryVariables,
} from "@/lib/graphql/apollo";
import { getAvatar } from "@/lib/utils/discord";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
	const {
		error,
		data: { getUser },
	} = await apolloClient.query<GetUserQuery, GetUserQueryVariables>({
		query: GetUserDocument,
		variables: {
			input: {
				id: params.id,
			},
		},
	});

	if (error) return notFound();

	const avatar = getAvatar(getUser.id, getUser.avatar);
	const banner = getUser?.banner ?? avatar;

	return (
		<React.Fragment>
			<Box position={"absolute"} inset={0} zIndex={-1}>
				<Image
					alt="bot avatar as background"
					draggable={false}
					width={1000}
					height={1000}
					src={banner}
					className={css({
						position: "absolute",
						w: "full",
						zIndex: -1,
						objectFit: "cover",
						objectPosition: "center top",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						opacity: 0.2,
						h: "100vh",
						maskImage:
							"radial-gradient(circle at top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
					})}
				/>
			</Box>
			<Flex flexDir={"column"}>
				<Flex justifyContent={"space-between"} alignItems={"center"}>
					<Flex alignItems={"center"} gap={3}>
						<Image
							alt="bot avatar"
							width={100}
							height={100}
							src={avatar}
							className={css({ rounded: "full" })}
						/>
						<Flex flexDir="column">
							<Heading size="4xl">{getUser.username}</Heading>
							<Text>{getUser.bio ?? "User has no bio"}</Text>
						</Flex>
					</Flex>
					<Flex gap={2}>heloo this wip</Flex>
				</Flex>
			</Flex>
		</React.Fragment>
	);
}
