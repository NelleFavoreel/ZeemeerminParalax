import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text6() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-90%)",
			},
			to: {
				transform: "translateX(0%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{
			once: true,
		}
	);
	const [refSlideIn1, slideIn2] = useInView(() => ({
		from: {
			transform: "translateX(90%)",
		},
		to: {
			transform: "translateX(0%)",
		},
		config: {
			tension: 10,
			friction: 10,
		},
	}));

	return (
		<div className="MiddelText">
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Ariel kiest voor de benen waardoor ze mens kan worden maar wel zonder stem
			</animated.h1>
			<animated.h1 ref={refSlideIn1} style={slideIn2}>
				Ze gaat op zoek naar de prins...
			</animated.h1>
		</div>
	);
}

export default Text6;
