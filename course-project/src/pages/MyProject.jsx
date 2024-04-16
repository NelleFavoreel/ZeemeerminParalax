import { Outlet, Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "../assets/koraal.png";
import { useScroll, animated } from "@react-spring/web";

function MyProject() {
	const { scrollYProgress } = useScroll();

	return (
		<Parallax pages={3} style={{ top: "100", left: "100" }}>
			<ParallaxLayer offset={0} speed={0}>
				<animated.h1 style={{ opacity: scrollYProgress }} className="title">
					De kleine zeemeermin
				</animated.h1>
			</ParallaxLayer>
			<ParallaxLayer offset={0.1} sticky={{ start: 0, end: 2 }} speed={1}>
				<div className="animation-layer" id="parallax-01">
					<img src={Background} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0}>
				<p>test</p>
			</ParallaxLayer>
		</Parallax>
	);
}
export default MyProject;
