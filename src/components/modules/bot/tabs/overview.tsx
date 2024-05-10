import TagButton from "@/components/common/buttons/tag-button";
import MarkdownRender from "@/components/common/feedback/markdown";
import DiscordIcon from "@/components/common/icons/discord";
import type { BotObject } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/user";
import NextLink from "next/link";

export default function OverviewBotTab({
	description,
	owners,
	guildCount,
	prefix,
	tags,
	votes,
}: Pick<
	BotObject,
	"description" | "owners" | "guildCount" | "prefix" | "tags" | "votes"
>) {
	return (
		<div className="flex lg:flex-row flex-col gap-3">
			<div className="w-full">
				<div className="break-all min-w-full table">
					<MarkdownRender content={description} />
				</div>
			</div>
			<div className="lg:w-1/3 w-full flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold">Overview</h1>
					<div className="flex flex-col gap-1 font-bold text-default-600">
						<div className="flex w-full justify-between items-center">
							<span>Votes</span>
							<Chip>{votes.totalCount}</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Guilds</span>
							<Chip>{guildCount}</Chip>
						</div>
						<div className="flex w-full justify-between items-center">
							<span>Prefix</span>
							<Chip>{prefix ?? "Slash commands"}</Chip>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Owners</h1>
					<div className="flex flex-col items-start gap-1">
						{owners.map((owner, key) => (
							<User
								key={key}
								avatarProps={{
									src: parseAvatar(owner.avatar, owner.id),
									size: "sm",
								}}
								name={owner.username}
							/>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Tags</h1>
					<div className="flex flex-wrap gap-1">
						{tags.map((tag, key) => (
							<TagButton
								key={key}
								as={NextLink}
								href={`/explore?tag=${tag.id}`}
							>
								{tag.displayName}
							</TagButton>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Links</h1>
					<div className="flex flex-col gap-2">
						<Link color="secondary" underline="always" as={NextLink} href="/gg">
							<DiscordIcon className="w-5 h-5 mr-2" />
							Support server
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
