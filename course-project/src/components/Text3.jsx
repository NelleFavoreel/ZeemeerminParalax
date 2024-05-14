import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text3() {
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

	return (
		<div className="textFlex">
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Prins valt in het water door de storm
			</animated.h1>
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Ariel brengt de prins terug naar het land
			</animated.h1>
		</div>
	);
}

export default Text3;
