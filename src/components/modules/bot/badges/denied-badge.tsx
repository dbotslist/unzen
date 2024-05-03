import { cn } from "@nextui-org/system";
import { Tooltip } from "@nextui-org/tooltip";
import { type IconProps, IconX } from "@tabler/icons-react";

export default function DeniedBotBadge({
	className,
	...props
}: Omit<IconProps, "ref">) {
	return (
		<Tooltip content="This bot is denied">
			<IconX className={cn("h-6 w-6 text-danger", className)} {...props} />
		</Tooltip>
	);
}
