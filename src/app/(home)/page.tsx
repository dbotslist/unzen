import TagButton from "@/components/common/buttons/tag-button";
import Motion from "@/components/common/motion";
import HomeBotsRows from "@/components/modules/home/rows";
import HomeSearchInput from "@/components/modules/home/search";
import HomeSuspenseFallback from "@/components/modules/home/suspense";
import { smoothFadeInFromBottomAndOutBottom } from "@/lib/constants/motion/variants";
import { Suspense } from "react";

export default function Page() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-between w-full max-h-72 ">
				<div className="max-w-3xl w-full">
					<div className="flex flex-col gap-3">
						<h1 className="text-5xl font-black">
							dbots<span className="text-secondary">.fun</span>
						</h1>
						<p className="text-sm text-default-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							magni nam omnis! Voluptas cumque neque sunt? Itaque tempore cum
							incidunt alias, ipsa unde autem qui magni et hic cumque quae.
						</p>
						<HomeSearchInput />
						<div className="flex flex-wrap gap-1">
							<TagButton>Gaming</TagButton>
							<TagButton>Music</TagButton>
							<TagButton>Social</TagButton>
						</div>
					</div>
				</div>
				<div className="z-[2] gradient-mask-b-0 xl:flex hidden">
					<Motion variants={smoothFadeInFromBottomAndOutBottom}>
						<div className="grid grid-cols-5 gap-3 opacity-60">
							{[...Array(15)].map((_, index) => (
								<div
									key={index}
									className="w-20 h-20 rounded-xl bg-secondary"
								/>
							))}
						</div>
					</Motion>
				</div>
			</div>
			<Suspense fallback={<HomeSuspenseFallback />}>
				<HomeBotsRows />
			</Suspense>
		</div>
	);
}
