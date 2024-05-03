import { commonColors, nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import { generateColors, rosePineColors } from "./tailwind.colors";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors: true,
			prefix: "dbots",
			defaultExtendTheme: "dark",
			defaultTheme: "dark",
			layout: {
				radius: {
					small: "0.5rem",
					medium: "0.75rem",
					large: "1rem",
				},
			},
			themes: {
				// todo: find a better way to do this shit
				dark: {
					colors: generateColors(commonColors.cyan),
				},
				cyan: {
					colors: generateColors(commonColors.cyan),
				},
				pink: {
					colors: generateColors(commonColors.pink),
				},
				green: {
					colors: generateColors(commonColors.green),
				},
				rose: {
					colors: generateColors(commonColors.red),
				},
				purple: {
					colors: generateColors(commonColors.purple),
				},
				orange: {
					colors: generateColors(commonColors.yellow),
				},
				"rose-pine": {
					colors: {
						background: rosePineColors.default.base,
						secondary: {
							900: rosePineColors.default.surface,
							foreground: rosePineColors.default.base,
							DEFAULT: rosePineColors.default.iris,
						},
						default: {
							DEFAULT: rosePineColors.default.surface,
							foreground: rosePineColors.default.text,
							100: rosePineColors.default.overlay,
							200: rosePineColors.default.base,
						},
						content1: rosePineColors.default.surface,
						content2: rosePineColors.default.overlay,
						content3: rosePineColors.default.muted,
						content4: rosePineColors.default.subtle,
						danger: {
							DEFAULT: rosePineColors.default.love,
							foreground: rosePineColors.default.base,
						},
						warning: rosePineColors.default.gold,
						success: rosePineColors.default.pine,
					},
				},
				"rose-pine-moon": {
					colors: {
						background: rosePineColors.moon.base,
						secondary: {
							900: rosePineColors.moon.surface,
							foreground: rosePineColors.moon.base,
							DEFAULT: rosePineColors.moon.iris,
						},
						default: {
							DEFAULT: rosePineColors.moon.surface,
							foreground: rosePineColors.moon.text,
							100: rosePineColors.moon.overlay,
							200: rosePineColors.moon.base,
						},
						content1: rosePineColors.moon.surface,
						content2: rosePineColors.moon.overlay,
						content3: rosePineColors.moon.muted,
						content4: rosePineColors.moon.subtle,
						danger: {
							DEFAULT: rosePineColors.moon.love,
							foreground: rosePineColors.moon.base,
						},
						warning: rosePineColors.moon.gold,
						success: rosePineColors.moon.pine,
					},
				},
			},
		}),
		require("tailwind-gradient-mask-image"),
	],
} satisfies Config;

export default config;
