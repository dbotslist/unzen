"use client";

import LoadingScreen from "@/components/common/layout/loading-screen";
import { useGetVanityQuery } from "@/lib/types/apollo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page({
	params: { vanity },
}: { params: { vanity: string } }) {
	const router = useRouter();
	const { data } = useGetVanityQuery({
		variables: { input: { id: vanity } },
		errorPolicy: "ignore",
	});

	useEffect(() => {
		if (data?.getVanity) router.replace(`/bot/${data.getVanity.targetId}`);
		else router.replace("/");
	}, [data, router]);

	return <LoadingScreen />;
}
