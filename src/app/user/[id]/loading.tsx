import { Skeleton } from "@nextui-org/skeleton";

export default function UserLoading() {
	return (
		<div className="flex flex-col gap-5">
			<div className="h-full rounded-large p-3 flex flex-col gap-3">
				<div className="flex gap-5 items-center">
					<Skeleton className="w-32 h-32 rounded-full" />
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<Skeleton className="rounded-large">
								<h1 className="text-3xl font-bold">loading</h1>
							</Skeleton>
							<Skeleton className="rounded-large">
								<div className="flex flex-wrap gap-1 items-center p-2 rounded-small w-fit bg-default">
									xxx
								</div>
							</Skeleton>
						</div>
						<Skeleton className="rounded-large">
							<p className="text-default-600">loading</p>
						</Skeleton>
					</div>
				</div>
			</div>
		</div>
	);
}
