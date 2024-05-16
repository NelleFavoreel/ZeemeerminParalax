import { useInView, animated } from "@react-spring/web";
import picture1 from "../assets/wolk.png";
import picture2 from "../assets/wolken.png";
import picture3 from "../assets/bliksem.png";

function Clouds() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-90%)",
			},
			to: {
				transform: "translateX(-20%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{
			once: true,
		}
	);
	const [refSlideIn1, slideIn2] = useInView(
		() => ({
			from: {
				transform: "translateX(100%)",
			},
			to: {
				transform: "translateX(30%)",
			},
			config: {
				tension: 10,
				friction: 10,
			},
		}),
		{
			once: true,
		}
	);
	const [refSlideIn3, slideIn3] = useInView(
		() => ({
			from: {
				transform: "scale(10%)",
			},
			to: {
				transform: "scale(170%)",
			},
			config: {
				tension: 50,
				friction: 40,
			},
		}),
		{
			once: true,
		}
	);
	return (
		<div className="flex">
			<animated.img ref={refSlideIn1} style={slideIn2} className="cloudpicture" src={picture1} alt="" />
			<animated.img ref={refSlideIn3} style={slideIn3} src={picture3} className="bliksem" alt="" />
			<animated.img ref={refSlideIn} style={slideIn} className="cloudpicture" src={picture2} alt="" />
		</div>
	);
}
export default Clouds;
