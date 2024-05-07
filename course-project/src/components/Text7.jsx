import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text7() {
	const [refSlideIn, slideIn] = useInView(() => ({
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
	}));
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
		<div className="MovingText">
			<animated.h1 ref={refSlideIn} style={slideIn}>
				Ze worden verliefd op elkaar
			</animated.h1>
			<animated.h1 ref={refSlideIn1} style={slideIn2}>
				Ariël staat voor een moeilijke keuze...
			</animated.h1>
		</div>
	);
}

export default Text7;
