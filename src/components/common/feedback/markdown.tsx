"use client";

import Markdown from "markdown-to-jsx";

interface MarkdownRenderProps {
	content: string;
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
	return (
		<Markdown
			options={{
				wrapper: "article",
				forceWrapper: true,
				forceBlock: true,
				overrides: {
					article: {
						props: {
							className: "w-full text-wrap h-full",
						},
					},
					h1: {
						props: {
							className: "text-4xl font-bold",
						},
					},
					h2: {
						props: {
							className: "text-3xl font-bold",
						},
					},
					h3: {
						props: {
							className: "text-2xl font-bold",
						},
					},
					a: {
						props: {
							target: "_blank",
							className: "text-primary underline",
						},
					},
					p: {
						props: {
							className: "text-muted-foreground",
						},
					},
					code: {
						props: {
							className:
								"bg-muted p-1 font-mono rounded text-muted-foreground mx-1",
						},
					},
					blockquote: {
						props: {
							className:
								"border-l-4 text-muted-foreground border-l-border pl-2",
						},
					},
					img: {
						props: {
							className: "rounded-md",
						},
					},
				},
			}}
		>
			{content}
		</Markdown>
	);
}
