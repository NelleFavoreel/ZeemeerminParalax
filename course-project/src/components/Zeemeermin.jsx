import { useInView, animated } from "@react-spring/web";
import picture from "../assets/zeemeermin.png";

function Zeemeermin() {
	const [refSlideIn, slideIn] = useInView(
		() => ({
			from: {
				transform: "translateX(-150%)",
			},
			to: {
				transform: "translateX(0%)",
			},
			config: {
				tension: 40,
				friction: 40,
			},
		}),
		{
			rootMargin: "50% 0% -30% 0%",
		}
	);

	return (
		<div className="flex">
			<animated.img ref={refSlideIn} style={slideIn} className="zeemeerminPicture" src={picture} alt="" />
		</div>
	);
}
export default Zeemeermin;
