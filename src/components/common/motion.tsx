import { motion, type HTMLMotionProps } from "framer-motion";

export default function Motion({ children, ...props }: HTMLMotionProps<"div">) {
	return (
		<motion.div initial="initial" animate="enter" exit="exit" {...props}>
			{children}
		</motion.div>
	);
}
