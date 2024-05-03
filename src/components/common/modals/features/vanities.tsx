"use client";

import { modalMotionProps } from "@/lib/constants/motion/props";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { useLocalStorage } from "react-use";

/// FID: 1
export default function VanitiesFeatureModal() {
	const [featureStatus, setFeatureStatus] = useLocalStorage(
		"fid-1-status",
		"pending",
	);
	const modalController = useDisclosure({
		isOpen: featureStatus === "pending",
	});
	return (
		<Modal
			{...modalController}
			onClose={() => setFeatureStatus("seen")}
			motionProps={modalMotionProps}
			backdrop="blur"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Vanities are finally here! ⭐
						</ModalHeader>
						<ModalBody>
							<p>
								Now you can set your own vanity to make your dbots profile more{" "}
								<strong>unique 🚀</strong>
							</p>
							<Image src="/assets/features/vanities-feature-banner.png" />
							<p>
								You can try this <strong>right now</strong> by accessing your
								profile settings OR your bot's settings
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="secondary" onClick={onClose}>
								Nice feature ;)
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
