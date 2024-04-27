"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Page() {
	return (
		<div className="flex flex-col gap-3">
			<Breadcrumbs>
				<BreadcrumbItem>Panel</BreadcrumbItem>
			</Breadcrumbs>
			<h1 className="text-2xl font-bold">Admin panel home</h1>
		</div>
	);
}
