"use client";

import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from "@nextui-org/react";
import { IconRobot, IconTags } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
	// todo: add some stats
	return (
		<div className="flex flex-col gap-3">
			<Breadcrumbs>
				<BreadcrumbItem>Panel</BreadcrumbItem>
			</Breadcrumbs>
			<h1 className="text-2xl font-bold">Admin panel home</h1>
			<div className="grid grid-cols-4 gap-3">
				<Card as={Link} href={"/panel/bots"} isPressable>
					<CardBody>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-3">
								<IconRobot className="w-6 h-6" />
								<h1 className="text-xl font-bold">Bots</h1>
							</div>
							<p className="text-default-600">0</p>
						</div>
					</CardBody>
				</Card>
				<Card isPressable>
					<CardBody>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-3">
								<IconTags className="w-6 h-6" />
								<h1 className="text-xl font-bold">Tags</h1>
							</div>
							<p className="text-default-600">0</p>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
