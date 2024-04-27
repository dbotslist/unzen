"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { UserPermissions } from "@/lib/constants/api";
import useSessionStore from "@/lib/stores/session";
import { hasPermissionFor } from "@/lib/utils/common";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export default function PanelLayout({ children }: { children: ReactNode }) {
	const { data: auth, loading } = useSessionStore();

	if (loading) return <LoadingScreen />;
	if (
		!auth ||
		!hasPermissionFor(auth.me.permissions!, UserPermissions.ManageBots)
	)
		return notFound();

	return children;
}
