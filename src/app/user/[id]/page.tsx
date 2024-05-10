"use client";

import UserTabs from "@/components/modules/user/tabs";
import { type BotObject, useGetUserSuspenseQuery } from "@/lib/types/apollo";
import { parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import { notFound } from "next/navigation";

// Mock
const mockedUserBadges = [
	{
		id: "beta_user",
		label: "Beta user",
	},
];

export default function Page({ params: { id } }: { params: { id: string } }) {
	const {
		data: { getUser: user },
		error,
	} = useGetUserSuspenseQuery({
		variables: {
			input: {
				id,
			},
		},
	});

	if (error) return notFound();
	return (
		<div className="flex flex-col gap-5">
			<div className="h-full rounded-large p-3 flex flex-col gap-3">
				<div className="flex gap-5 items-center">
					<Avatar
						isBordered
						color="secondary"
						src={parseAvatar(user.avatar, user.id!)}
						className="w-32 h-32"
					/>
					<div className="flex flex-col">
						<div className="flex items-center gap-3">
							<h1 className="text-3xl font-bold">{user.username}</h1>
							<div className="flex flex-wrap gap-1 items-center p-1.5 rounded-small w-fit bg-default">
								{mockedUserBadges.map((badge, key) => (
									<Tooltip key={key} content={badge.label}>
										<Image
											draggable={false}
											src={`/assets/badges/${badge.id}.svg`}
											className="w-5 h-5"
										/>
									</Tooltip>
								))}
							</div>
						</div>
						<div className="flex gap-1 items-center">
							<IconInfoCircleFilled className="w-5 h-5 text-default-600" />
							<p className="text-default-600">{user.bio ?? "No bio"}</p>
						</div>
					</div>
				</div>
				<UserTabs username={user.username} bots={user.bots as BotObject[]} />
			</div>
		</div>
	);
}
