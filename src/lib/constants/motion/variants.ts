import type { Variants } from "framer-motion";

export const fadeInFromTopAndOutTop: Variants = {
	initial: { y: -30, x: 0, opacity: 0 },
	enter: { y: 0, opacity: 1 },
	exit: {
		y: -25,
		opacity: 0,
		transition: { duration: 0.2 },
	},
};

export const fadeInFromBottomAndOutBottom: Variants = {
	initial: { y: 30, x: 0, opacity: 0 },
	enter: { y: 0, opacity: 1 },
	exit: {
		y: 25,
		opacity: 0,
		transition: { duration: 0.2 },
	},
};
