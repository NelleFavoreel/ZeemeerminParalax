import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "../assets/koraal.png";
import Zeemeermin from "../components/Zeemeermin";
import "./Project.css";

function MyProject() {
	return (
		<Parallax pages={4} style={{ top: "0", left: "0" }}>
			<ParallaxLayer offset={0} speed={0}>
				<h1 className="title">De kleine zeemeermin</h1>
			</ParallaxLayer>
			<ParallaxLayer offset={0} sticky={{ start: 0, end: 1 }} speed={1}>
				<div className="animation-layer" id="parallax-01">
					<img src={Background} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0.1}>
				<Zeemeermin />
			</ParallaxLayer>
		</Parallax>
	);
}
export default MyProject;
