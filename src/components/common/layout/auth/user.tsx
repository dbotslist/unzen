"use client";

import { UserPermissions } from "@/lib/constants/api";
import useSessionStore from "@/lib/stores/session";
import { type AuthUserObject, useLogoutMutation } from "@/lib/types/apollo";
import { handleError, hasPermissionFor, parseAvatar } from "@/lib/utils/common";
import { Avatar } from "@nextui-org/avatar";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/dropdown";
import { useDisclosure } from "@nextui-org/use-disclosure";
import {
	IconLogout2,
	IconPlus,
	IconSettingsFilled,
	IconUserFilled,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Loader from "../../feedback/loader";
import SubmitModal from "../../modals/submit";

export default function HeaderAuthUser({
	avatar,
	id,
	permissions,
}: Partial<AuthUserObject>) {
	const disclosureProps = useDisclosure();
	const router = useRouter();
	const [logout, { loading }] = useLogoutMutation({
		onCompleted: () => {
			useSessionStore.setState({ data: undefined, loading: false });
			router.replace("/");
		},
		onError: handleError,
	});

	const canSeePanel = hasPermissionFor(
		permissions as number,
		UserPermissions.ManageBots,
	);

	return (
		<>
			<SubmitModal {...disclosureProps} />
			<Dropdown placement="bottom-end" showArrow radius="sm" offset={15}>
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform w-9 h-9"
						color="default"
						src={parseAvatar(avatar, id as string)}
					/>
				</DropdownTrigger>
				<DropdownMenu variant="faded" aria-label="User dropdown">
					<DropdownItem
						href={`/user/${id}`}
						startContent={<IconUserFilled className="w-5 h-5" />}
					>
						Profile
					</DropdownItem>
					<DropdownItem
						onClick={disclosureProps.onOpen}
						startContent={<IconPlus className="w-5 h-5" />}
					>
						Submit
					</DropdownItem>
					{canSeePanel ? (
						<DropdownItem
							href="/panel"
							startContent={<IconSettingsFilled className="w-5 h-5" />}
						>
							Admin panel
						</DropdownItem>
					) : (
						<DropdownItem
							href="/"
							startContent={<IconSettingsFilled className="w-5 h-5" />}
						>
							Settings
						</DropdownItem>
					)}
					<DropdownItem
						onClick={() => logout()}
						startContent={
							loading ? <Loader /> : <IconLogout2 className="w-5 h-5" />
						}
						className="text-danger"
						color="danger"
					>
						Logout
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
}
