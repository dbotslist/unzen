import { css, cx } from "@/styled-system/css";

export const icon = (size = 5) =>
	css({
		w: size.toString(),
		h: size.toString(),
	});

export const buttonIcon = (pos: "left" | "right", size = 5) =>
	cx(
		css({
			ml: pos === "right" ? 2 : 0,
			mr: pos === "left" ? 2 : 0,
		}),
		icon(size),
	);
