import { useInView, animated } from "@react-spring/web";
import picture from "../assets/land prins.png";

function Prince() {
	const [refSlideIn, slideIn] = useInView(() => ({
		from: {
			transform: "translateY(170%)",
		},
		to: {
			transform: "translateY(180%)",
		},
		config: {
			tension: 20,
			friction: 20,
		},
	}));

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={slideIn} className="princePicture" src={picture} alt="" />
		</div>
	);
}
export default Prince;
