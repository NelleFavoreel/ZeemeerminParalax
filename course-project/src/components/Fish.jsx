import { useInView, animated } from "@react-spring/web";
import picture from "../assets/vissen.png";

function Fish() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-150%) translateY(-200%)",
			},
			to: {
				transform: "translateX(100%) translateY(100%)",
			},
			config: {
				tension: 20,
				friction: 20,
			},
		}),
		{
			rootMargin: "0% 0% 0% 0%",
			once: true,
		}
	);

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={slideIn} className="fishpicture" src={picture} alt="" />
		</div>
	);
}
export default Fish;
