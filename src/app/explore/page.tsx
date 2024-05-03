import { Button } from "@nextui-org/button";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/input";
import { IconDirection, IconFilterFilled } from "@tabler/icons-react";

export default function Page() {
	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-2xl font-bold">Explore Discord bots</h1>
			<div className="flex items-center gap-2">
				<Input
					color="secondary"
					size="lg"
					variant="bordered"
					placeholder="Search bots"
				/>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Button isIconOnly size="lg" variant="flat">
							<IconFilterFilled className="w-5 h-5" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Filters" variant="faded">
						<DropdownItem startContent={<IconDirection className="w-5 h-5" />}>
							Direction
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	);
}
