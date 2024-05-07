import React from "react";
import { useInView, animated } from "@react-spring/web";

function Text8() {
	const [refSlideIn1, slideIn1] = useInView({
		triggerOnce: true,
		rootMargin: "-50% 0px",
	});

	const [refSlideIn2, slideIn2] = useInView({
		triggerOnce: true,
		rootMargin: "-50% 0px",
	});

	return (
		<div className="MovingTextContainer">
			<div className="MovingText">
				<animated.h1 ref={refSlideIn1} style={{ ...slideIn1 }}>
					Kiest ze voor de liefde of <br />
					kiest ze voor haar stem maar wel terug zeemeermin worden?
				</animated.h1>
			</div>
			<div className="MovingText">
				<animated.h1 ref={refSlideIn2} style={{ ...slideIn2 }}>
					Wat kies jij?
				</animated.h1>
			</div>
		</div>
	);
}

export default Text8;
