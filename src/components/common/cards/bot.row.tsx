import ErrorMessage from "@/components/common/feedback/error-message";
import LoadingScreen from "@/components/common/layout/loading-screen";
import { cn } from "@nextui-org/system";
import { type ReactNode, Suspense } from "react";

interface BotRowProps {
	title?: string;
	subtitle?: string;
	icon?: ReactNode;
	gridClassNames?: string;
	children?: ReactNode;
	disableHeader?: boolean;
}

export default function BotRow({
	title,
	subtitle,
	icon,
	gridClassNames = "md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3",
	children,
	disableHeader = false,
}: BotRowProps) {
	return (
		<div className="flex flex-col gap-5">
			{!disableHeader && (
				<div className="flex gap-3 items-center">
					<div className="bg-secondary-900 text-secondary p-3 rounded-full">
						{icon}
					</div>
					<div className="flex flex-col">
						<h1 className="text-2xl font-semibold">{title}</h1>
						{subtitle && <p className="text-default-600 text-sm">{subtitle}</p>}
					</div>
				</div>
			)}
			<Suspense key={title} fallback={<LoadingScreen />}>
				{children ? (
					<div className={cn("grid", gridClassNames)}>{children}</div>
				) : (
					<ErrorMessage isCentered message="No bots found" />
				)}
			</Suspense>
		</div>
	);
}
