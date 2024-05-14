import React, { useState, useEffect } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import picture from "../assets/land prins.png";
import WalkingGirl from "../assets/meisje.png";

function WalkingPrince() {
	const [hasBeenInView, setHasBeenInView] = useState(false);

	const [refSlideIn, inView] = useInView({
		root: null, // Observe scrolling of the entire window
		threshold: 0.5, // Consider the element in view when at least 50% of it is visible
	});

	const props = useSpring({
		from: { transform: "translateX(120%)" }, // Start from right side of the screen
		to: { transform: hasBeenInView || inView ? "translateX(30%)" : "translateX(120%)" }, // Slide in when in view, otherwise slide out
		config: { tension: 20, friction: 20 },
	});

	useEffect(() => {
		if (inView && !hasBeenInView) {
			setHasBeenInView(true);
		}
	}, [inView, hasBeenInView]);

	return (
		<div className="flex">
			<img className="girl" src={WalkingGirl} alt="Meisje dat wandelt" />
			<animated.img ref={refSlideIn} style={{ ...props, position: "absolute" }} className="walkingprince" src={picture} alt="" />
		</div>
	);
}

export default WalkingPrince;
