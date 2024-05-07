import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text4() {
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
	const [refSlideIn1, slideIn2] = useInView(
		() => ({
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
		}),
		{
			once: true,
		}
	);

	return (
		<div className="textFlex">
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Ariel wordt smoorverliefd op de prins
			</animated.h1>
			<animated.h1 ref={refSlideIn1} style={slideIn2}>
				Dus gaat ze naar de heks om te vragen of ze mens kan worden
			</animated.h1>
		</div>
	);
}

export default Text4;
