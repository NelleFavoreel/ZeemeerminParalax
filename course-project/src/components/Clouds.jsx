import { useInView, animated } from "@react-spring/web";
import picture1 from "../assets/wolk.png";
import picture2 from "../assets/wolken.png";

function Clouds() {
	const [refSlideIn, slideIn] = useInView(() => ({
		from: {
			transform: "translateX(-90%)",
		},
		to: {
			transform: "translateX(0%)",
		},
	}));
	const [refSlideIn1, slideIn2] = useInView(() => ({
		from: {
			transform: "translateX(90%)",
		},
		to: {
			transform: "translateX(0%)",
		},
	}));

	return (
		<div className="flex">
			<animated.img ref={refSlideIn1} style={slideIn2} className="cloudpicture" src={picture1} alt="" />
			<animated.img ref={refSlideIn} style={slideIn} className="cloudpicture" src={picture2} alt="" />
		</div>
	);
}
export default Clouds;
