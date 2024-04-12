import {
	IconBrandGraphql,
	IconBrandNextjs,
	IconBrandVercel,
} from "@tabler/icons-react";

export default function Footer() {
	return (
		<footer className="py-4 px-3 mt-16 static bottom-0 w-full">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
					<p className="text-xs text-gray-400 md:text-sm">
						dbots.fun, Copyright {new Date().getFullYear()} © All Rights
						Reserved
					</p>
				</div>
				<div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
					<div className="flex justify-center flex-wrap text-xs md:text-sm gap-3">
						<div className="inline-flex gap-1 items-center">
							Made with <IconBrandGraphql className="w-5 h-5 text-pink-500" />{" "}
							and <IconBrandNextjs className="w-5 h-5" /> deployed with{" "}
							<IconBrandVercel className="w-5 h-5" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
