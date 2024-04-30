import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "../assets/koraal.png";
import Zeemeermin from "../components/Zeemeermin";
import Mounten from "../assets/tweede bergen.png";
import Mounten1 from "../assets/Eerste bergen.png";
import Boat from "../assets/boot.png";
import Fish from "../components/Fish";
import Clouds from "../components/Clouds";
import "./Project.css";

function MyProject() {
	return (
		<Parallax pages={8} style={{ top: "0", left: "0" }}>
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
			<ParallaxLayer offset={1} speed={0.1}>
				<Fish />
			</ParallaxLayer>
			<ParallaxLayer offset={2} sticky={{ start: 2, end: 3 }} speed={2}>
				<div className="mounten" id="parallax-02">
					<img className="mounten" src={Mounten} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} sticky={{ start: 2, end: 3 }} speed={2}>
				<div className="mounten">
					<img className="mounten" src={Mounten1} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={1} sticky={{ start: 2, end: 3 }}>
				<Clouds />
			</ParallaxLayer>
			<ParallaxLayer offset={2} sticky={{ start: 2, end: 3 }} speed={1}>
				<div className="boat">
					<img src={Boat} />
				</div>
			</ParallaxLayer>
		</Parallax>
	);
}
export default MyProject;
