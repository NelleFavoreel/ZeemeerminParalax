import React, { useState } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import walkingGirl from "../assets/meisje.png";
import vis from "../assets/vis2.png";
import vis2 from "../assets/vis3.png";
import prince from "../assets/land prins.png";

function Text8() {
	const [direction, setDirection] = useState("center");

	const [refSlideIn1, slideIn1] = useInView({
		triggerOnce: true,
		rootMargin: "-50% 0px",
	});

	const [refSlideIn2, slideIn2] = useInView({
		triggerOnce: true,
		rootMargin: "-50% 0px",
	});

	const girlSpring = useSpring({
		transform: direction === "left" ? "translateX(-50%)" : direction === "right" ? "translateX(50%)" : "translateX(0%)",
		config: { tension: 200, friction: 20 },
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
				<div className="buttonClass">
					<button onClick={() => setDirection("left")}>Terug naar de zee</button>
					<button onClick={() => setDirection("right")}>Trouwen met de prins</button>
				</div>
				<animated.img className="walkingGirl" src={walkingGirl} alt="Walking Girl" style={{ ...girlSpring, position: "absolute" }} />
				<div className="endPicture">
					<div>
						<img className="visPicture" src={vis} alt="" />
						<img className="visPicture" src={vis2} alt="" />
					</div>

					<img className="princePicture" src={prince} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Text8;
