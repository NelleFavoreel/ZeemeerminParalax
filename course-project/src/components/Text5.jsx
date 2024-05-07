import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text5() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-60%)",
			},
			to: {
				transform: "translateX(0%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{}
	);
	const [refSlideIn1, slideIn1] = useInView(
		() => ({
			from: {
				transform: "translateX(-60%)",
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
			rootMargin: "80% 0% -20% 0%",
		}
	);

	return (
		<div className="heksText">
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Ariel staat voor een moeilijke keuze:
			</animated.h1>
			<animated.h1 ref={refSlideIn1} style={slideIn1}>
				Je krijgt benen in plaats daarvan moet je je stem afgeven
			</animated.h1>
		</div>
	);
}

export default Text5;
