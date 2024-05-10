import CertifiedBotBadge from "@/components/modules/bot/badges/certified-badge";
import type { BotObject } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { IconArrowUp, IconServer } from "@tabler/icons-react";
import Link from "next/link";
import FallbackAvatar from "../feedback/fallback-avatar";

interface BotCardProps extends Partial<BotObject> {}

export default function BotCard({
	id,
	avatar,
	name,
	shortDescription,
	certified,
	guildCount,
	votes,
}: BotCardProps) {
	return (
		<Card
			as={Link}
			href={`/bot/${id}`}
			isPressable
			key={id}
			shadow="none"
			radius="lg"
			className="max-h-64 max-w-lg h-full group"
			classNames={{
				header: "p-4",
				body: "p-4",
				footer: "p-6",
			}}
		>
			<CardHeader>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-row gap-3 items-center">
						<Avatar
							showFallback
							fallback={<FallbackAvatar />}
							key={id}
							src={parseAvatar(avatar, id as string)}
							radius="md"
							className="w-20 h-20"
						/>
						<div className="flex flex-col">
							<div className="flex items-center gap-1">
								<h3 className="text-xl font-bold">{name ?? "Unknown"}</h3>
								{certified && <CertifiedBotBadge />}
							</div>
							<p className="text-default-600 text-sm">Fun, Moderation, Etc.</p>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardBody className="overflow-clip h-64 gradient-mask-b-0">
				<p className="text-small">{shortDescription}</p>
			</CardBody>
			<CardFooter className="flex justify-between w-full text-default-600 text-lg">
				<div className="flex items-center gap-1">
					<IconArrowUp className="w-5 h-5" /> {votes?.totalCount}
				</div>
				<div className="flex items-center gap-1">
					<IconServer className="w-5 h-5" /> {guildCount}
				</div>
			</CardFooter>

			<div
				style={{
					backgroundImage: `url('${parseAvatar(avatar, id as string)}')`,
				}}
				className="bg-no-repeat duration-300 bg-cover absolute w-full h-full bottom-0 gradient-mask-t-0 opacity-10 hover:opacity-15"
			/>
			<div className="bg-secondary bg-no-repeat duration-300 bg-cover absolute w-full h-full bottom-0 gradient-mask-t-0 opacity-10 hover:opacity-15" />
		</Card>
	);
}
