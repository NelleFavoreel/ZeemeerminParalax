import React from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import picture from "../assets/land prins.png";
import WalkingGirl from "../assets/meisje.png";

function WalkingPrince() {
	const [refSlideIn, inView] = useInView({
		root: window, // Observe scrolling of the entire window
	});

	const props = useSpring({
		from: { transform: "translateX(300%)" },
		to: { transform: inView ? "translateX(30%)" : "translateX(300%)" }, // Slide in when in view, otherwise slide out
		config: { tension: 20, friction: 20 },
	});

	return (
		<div className="flex">
			<img className="girl" src={WalkingGirl} alt="Meisje dat wandelt" />
			<animated.img ref={refSlideIn} style={{ ...props, position: "absolute" }} className="prince" src={picture} alt="" />
		</div>
	);
}
export default WalkingPrince;
