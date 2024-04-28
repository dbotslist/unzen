import { defaultImage } from "@/lib/constants/website";
import { Avatar } from "@nextui-org/react";

export default function FallbackAvatar() {
	return (
		<Avatar
			src={defaultImage.src}
			radius="full"
			isBordered
			className="w-24 h-24"
		/>
	);
}
