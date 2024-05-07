import React from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import Bergen from "../assets/bergen strand.png";

function Landscape() {
	const [refSlideIn, inView] = useInView({
		triggerOnce: true,
		rootMargin: "0% 0px", // Trigger the animation when the image is halfway into the viewport
	});

	const props = useSpring({
		from: { transform: "scale(0.8)" },
		to: { transform: inView ? "scale(1.2)" : "scale(0.8)" }, // Scale the image to 40% when in view, otherwise scale it to 20%
		config: { tension: 20, friction: 20 },
	});

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={props} className="bergen" src={Bergen} alt="" />
		</div>
	);
}

export default Landscape;
