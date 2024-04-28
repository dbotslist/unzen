import { cn } from "@nextui-org/react";
import { IconMoodSadFilled } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface ErrorMessageProps {
	icon?: ReactNode;
	message: string;
	isCentered?: boolean;
}

export default function ErrorMessage({
	icon = <IconMoodSadFilled className="w-6 h-6" />,
	message,
	isCentered,
}: ErrorMessageProps) {
	return (
		<div
			className={cn(
				"font-bold text-danger flex items-center",
				isCentered ? "justify-center h-32 w-full" : "",
			)}
		>
			{icon && <div className="mr-2">{icon}</div>}
			<span>{message}</span>
		</div>
	);
}
