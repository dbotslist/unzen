"use client";

import { type RecipeVariantProps, css, cva, cx } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { Button as HeadlessButton } from "@headlessui/react";
import Link from "next/link";

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

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		rounded: "lg",
		cursor: "pointer",
		transitionDuration: "fast",
		fontWeight: 500,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			// cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		color: {
			brand: {
				bg: {
					base: "brand.500",
					_hover: "brand.600",
					_active: "brand.700",
				},
				color: "ButtonText",
			},
			gray: {
				bg: {
					base: "background.800",
					_hover: "background.700",
					_active: "background.600",
				},
				color: "background.200",
			},
			bad: {
				bg: {
					base: "bad",
					_hover: "bad/80",
					_active: "bad/70",
				},
				color: "ButtonText",
			},
		},
		size: {
			sm: {
				fontSize: "smallest",
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 5,
				py: 2,
			},
			lg: {
				h: 12,
				px: 7,
				py: 5,
				rounded: "xl",
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		color: "brand",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled(HeadlessButton, button);
export const LinkButton = styled(Link, button);
