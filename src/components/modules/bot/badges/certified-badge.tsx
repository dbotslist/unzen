import { Tooltip, cn } from "@nextui-org/react";
import { IconCircleCheckFilled, type IconProps } from "@tabler/icons-react";

export default function CertifiedBotBadge({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<Tooltip content="This bot is certified by dbots.fun">
			<IconCircleCheckFilled
				className={cn("h-6 w-6 text-secondary", className)}
				{...props}
			/>
		</Tooltip>
	);
}
