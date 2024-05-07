import React from "react";
import { useInView, animated } from "@react-spring/web";
import picture from "../assets/spiegelZeemeermin.png";

function ZeemeerminRechts() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(350%) translateY(-90%)",
			},
			to: {
				transform: "translateX(80%) translateY(20%)",
			},
			config: {
				tension: 20,
				friction: 20,
			},
		}),
		{
			rootMargin: "0% 0% 0% 0%",
		}
	);

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={slideIn} className="zeemeerminPicture" src={picture} alt="" />
		</div>
	);
}

export default ZeemeerminRechts;
