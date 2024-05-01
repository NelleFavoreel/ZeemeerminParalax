import { useInView, animated } from "@react-spring/web";
import picture from "../assets/bliksem.png";
import { useParallax } from "react-scroll-parallax";

function Lightning() {
	const parallax = useParallax({
		rotate: [0, 360],
	});
	return (
		<div className="flex">
			<animated.img ref={parallax} style={parallax} className="cloudpicture" src={picture} alt="" />
		</div>
	);
}
export default Lightning;
