import { commonColors } from "@nextui-org/theme";

export const rosePineColors = {
    default: {
        base: "#191724",
        surface: "#1f1d2e",
        overlay: "#26233a",
        muted: "#6e6a86",
        subtle: "#908caa",
        text: "#e0def4",
        love: "#eb6f92",
        gold: "#f6c177",
        rose: "#ebbcba",
        pine: "#31748f",
        foam: "#9ccfd8",
        iris: "#c4a7e7",
        highlightLow: "#21202e",
        highlightMed: "#403d52",
        highlightHigh: "#524f67",
    },
    moon: {
        base: "#232136",
        surface: "#2a273f",
        overlay: "#393552",
        muted: "#6e6a86",
        subtle: "#908caa",
        text: "#e0def4",
        love: "#eb6f92",
        gold: "#f6c177",
        rose: "#ea9a97",
        pine: "#3e8fb0",
        foam: "#9ccfd8",
        iris: "#c4a7e7",
        highlightLow: "#2a283e",
        highlightMed: "#44415a",
        highlightHigh: "#56526e",
      },
};

export const baseColors = {
    background: "#070510",
    foreground: "#D4D4D4",
    content: {
        content1: "#18161e",
        content2: "#22202b",
        content3: "#2b2936",
        content4: "#343241",
    }
}

export const generateColors = (mainColor: typeof commonColors.cyan) => {
	return {
		background: baseColors.background,
		secondary: {
			...mainColor,
			foreground: commonColors.black,
			DEFAULT: mainColor["500"],
		},
		default: {
			DEFAULT: baseColors.content.content1,
			foreground: baseColors.foreground,
		},
		...baseColors.content,
	};
};