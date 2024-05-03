import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function BotSkeletonCard() {
	return (
		<Card
			isPressable
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
						<Skeleton className="w-20 h-20 rounded-medium" />
						<div className="flex flex-col gap-1">
							<div className="flex items-center gap-1">
								<Skeleton className="rounded-medium">
									<h3 className="text-xl font-bold">Discord bot</h3>
								</Skeleton>
							</div>
							<Skeleton className="rounded-medium">
								<p className="text-default-600 text-sm">
									Fun, Moderation, Etc.
								</p>
							</Skeleton>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardBody className="overflow-clip h-64 gradient-mask-b-0">
				<Skeleton className="rounded-medium">
					<p className="text-small">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
						itaque consequuntur vero minus esse tenetur nobis odio.{" "}
					</p>
				</Skeleton>
			</CardBody>
			<CardFooter className="flex justify-between w-full text-default-600 text-lg">
				<div className="flex items-center gap-1">
					<Skeleton className="rounded-medium">100</Skeleton>
				</div>
				<div className="flex items-center gap-1">
					<Skeleton className="rounded-medium">100</Skeleton>
				</div>
			</CardFooter>
		</Card>
	);
}
