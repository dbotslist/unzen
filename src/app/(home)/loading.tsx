import BotSkeletonCard from "@/components/common/cards/bot.skeleton";

export default function HomeLoading() {
	return (
		<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3">
			{[...Array(4)].map((_, key) => (
				<BotSkeletonCard key={key} />
			))}
		</div>
	);
}
