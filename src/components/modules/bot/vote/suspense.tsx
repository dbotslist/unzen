import { Skeleton } from "@nextui-org/skeleton";

export default function BotVoteSuspense() {
	return (
		<div className="flex items-center gap-4">
			<Skeleton className="w-20 h-20 rounded-full" />
			<div className="flex flex-col gap-1">
				<Skeleton className="w-5 h-2" />
				<div className="flex gap-3 items-center text-sm text-default-600">
					<Skeleton className="w-7 h-2" />
					<Skeleton className="w-7 h-2" />
				</div>
			</div>
		</div>
	);
}
