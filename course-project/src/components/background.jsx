import React from "react";
import { useInView, animated } from "@react-spring/web";
import picture from "../assets/koraal.png";

function MovingBackground() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(200%)",
			},
			to: {
				transform: "translateX(40%)",
			},
			config: {
				tension: 20,
				friction: 20,
			},
		}),
		{}
	);

	return (
		<div className="background-container">
			<animated.div ref={refSlideIn} style={slideIn} alt="" />
		</div>
	);
}

export default MovingBackground;
