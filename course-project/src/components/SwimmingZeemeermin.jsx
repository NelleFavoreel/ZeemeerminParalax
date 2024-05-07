import { useInView, animated } from "@react-spring/web";
import picture from "../assets/zeemeermin.png";
import picture2 from "../assets/land prins.png";

function SwimmingZeemeermin() {
	const [refSlideIn, slideIn] = useInView(() => ({
		from: {
			transform: "translateX(-110%)",
		},
		to: {
			transform: "translateX(90%)",
		},
		config: {
			tension: 20,
			friction: 20,
		},
	}));

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={slideIn} className="zeemeerminPicture" src={picture} alt="" />
			<animated.img ref={refSlideIn} style={slideIn} className="zeemeerminPicture" src={picture2} alt="" />
		</div>
	);
}
export default SwimmingZeemeermin;
