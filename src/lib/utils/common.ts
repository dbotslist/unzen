import type { ApolloError } from "@apollo/client";
import { toast } from "sonner";
import { defaultImage } from "../constants/website";
import type { AvatarSizes } from "../types/discord";

export function parseAvatar(
	avatar: string | null | undefined,
	id: string,
	size?: AvatarSizes,
) {
	return avatar
		? `https://cdn.discordapp.com/avatars/${id}/${avatar}?size=${size ?? 1024}`
		: defaultImage.src;
}

export function handleError(error: ApolloError) {
	return error.graphQLErrors.map((e) =>
		toast.error(e.message, {
			icon: (e.extensions.face as string) ?? ":(",
		}),
	);
}

export function formatDate(ms: number) {
	let minutes = Math.floor((ms / (1000 * 60)) % 60);
	let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

	hours = hours < 10 ? Number(`0${hours}`) : hours;
	minutes = minutes < 10 ? Number(`0${minutes}`) : minutes;

	return `${hours} hours and ${minutes} minutes`;
}

export function hasPermissionFor(
	userPermissions: number,
	requiredPermissions: number,
) {
	return userPermissions >= requiredPermissions;
}
