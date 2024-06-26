"use client";

import DefaultAvatar from "@public/fallback.png";
import NImage, { type ImageProps } from "next/image";
import React, { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
	fallbackSrc?: string;
}

export default function Image(props: ImageWithFallbackProps) {
	const { src, fallbackSrc, ...rest } = props;
	const [imgSrc, setImgSrc] = useState(src);

	return (
		<NImage
			{...rest}
			src={imgSrc}
			onError={() => {
				setImgSrc(fallbackSrc ?? DefaultAvatar.src);
			}}
			blurDataURL={DefaultAvatar.blurDataURL}
			placeholder={rest.placeholder ?? "blur"}
		/>
	);
}
