import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import { themeColors } from "./tailwind.colors";

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
				...themeColors,
			},
		}),
		require("tailwind-gradient-mask-image"),
	],
} satisfies Config;

export default config;
