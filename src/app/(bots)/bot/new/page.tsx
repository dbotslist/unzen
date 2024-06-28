import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Center } from "@/styled-system/jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Page() {
	return (
		<Center>
			<Alert>
				<AlertIcon>
					<XMarkIcon />
				</AlertIcon>
				<AlertContent>
					<AlertTitle>Please read me.</AlertTitle>
					<AlertDescription>
						Currently this page is under development.{" "}
						<Link href="https://discord.gg/qhuQkGWmsE">
							Join our Discord server
						</Link>{" "}
						to get notified whenever this is ready.
					</AlertDescription>
				</AlertContent>
			</Alert>
		</Center>
	);
}
