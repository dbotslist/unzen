"use client";

import BotSearchCard from "@/components/shared/bot/search-card";
import ErrorMessage from "@/components/shared/feedback/error";
import LineTitle from "@/components/shared/feedback/line-title";
import { Input } from "@/components/ui/input";
import { box } from "@/components/ui/styles/box";
import { Text } from "@/components/ui/text";
import { fadeInFromTopExitBottom } from "@/lib/constants/animations";
import { useSearchBotsLazyQuery } from "@/lib/graphql/apollo";
import { css, cx } from "@/styled-system/css";
import { Center, Flex, Grid, GridItem } from "@/styled-system/jsx";
import { useOutsideClick } from "@chakra-ui/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";

export default function HomeSearch({ isNav = false }: { isNav?: boolean }) {
	const searchRef = useRef<HTMLDivElement>(null);
	const [query, setQuery] = useState<string | null>(null);
	const [active, setActive] = useState<boolean>(false);

	const [
		executeSearchQuery,
		{ data: results, loading: searching, error, refetch, called },
	] = useSearchBotsLazyQuery();

	useOutsideClick({
		ref: searchRef,
		handler: () => setActive(false),
	});

	useEffect(() => {
		if (query?.length === 0) setQuery(null);
	}, [query]);

	const [ready] = useDebounce(
		async () => {
			if (!query?.length) return;

			await refetch({
				input: {
					query: query,
				},
			});
		},
		500,
		[query],
	);

	const loading = (!ready() ?? true) && searching && !results;
	return (
		<Flex
			flexDir={"column"}
			alignItems={isNav ? "end" : "initial"}
			gap={2}
			pos={isNav ? "initial" : "relative"}
		>
			<Input
				autoComplete="off"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setQuery(e.target.value)
				}
				onFocus={() => {
					if (!called)
						executeSearchQuery({
							variables: {
								pagination: {
									size: 4,
								},
								input: {
									query,
								},
							},
						});
					setActive(true);
				}}
				onBlur={() => setActive(true)}
				ref={searchRef}
				placeholder={"Search bots..."}
			/>
			<AnimatePresence>
				{active && (
					<motion.div
						variants={fadeInFromTopExitBottom}
						initial="initial"
						animate="enter"
						exit="exit"
						className={cx(
							box,
							css({
								pos: "absolute",
								mt: 12,
								w: "full",
								maxW: isNav ? "1/2" : "full",
							}),
						)}
					>
						<LineTitle>Search bots {loading}</LineTitle>
						{loading && (
							<Center my={22}>
								<Text>Loading...</Text>
							</Center>
						)}
						{error && <ErrorMessage>{error.message}</ErrorMessage>}
						{results?.bots.nodes?.length ? (
							<Grid gridTemplateRows={1} gap={2} mt={3}>
								{results?.bots.nodes?.map((bot) => (
									<GridItem key={bot.id}>
										<BotSearchCard {...bot} />
									</GridItem>
								))}
							</Grid>
						) : (
							<ErrorMessage>No search results</ErrorMessage>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</Flex>
	);
}
