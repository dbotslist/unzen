import { cn } from "@nextui-org/system";
import { Tooltip } from "@nextui-org/tooltip";
import { IconClockFilled, type IconProps } from "@tabler/icons-react";

export default function PendingBotBadge({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<Tooltip content="This bot is pending">
			<IconClockFilled
				className={cn("h-6 w-6 text-warning", className)}
				{...props}
			/>
		</Tooltip>
	);
}
