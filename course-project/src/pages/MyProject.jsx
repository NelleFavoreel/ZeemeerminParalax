import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "../assets/koraal.png";
import BackgroundHeks from "../assets/koraal2.png";
import Zeemeermin from "../components/Zeemeermin";
import Mounten from "../assets/tweede bergen.png";
import Mounten1 from "../assets/Eerste bergen.png";
import Boat from "../assets/boot.png";
import Fish from "../components/Fish";
import Clouds from "../components/Clouds";
import Prince from "../components/Prince";
import MovingBackground from "../components/background";
import SwimmingZeemeermin from "../components/SwimmingZeemeermin";
import ZeemeerminRechts from "../components/ZeemeerminRechts";
import Text4 from "../components/Text4";
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
			<ParallaxLayer offset={4} speed={0} sticky={{ start: 2, end: 3 }}>
				<Clouds />
			</ParallaxLayer>
			<ParallaxLayer offset={2} sticky={{ start: 2, end: 3 }} speed={1}>
				<div className="boat">
					<img src={Boat} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} sticky={{ start: 2, end: 3 }} speed={1}>
				<Prince></Prince>
			</ParallaxLayer>
			<ParallaxLayer offset={4} speed={1}>
				<SwimmingZeemeermin />
			</ParallaxLayer>
			<ParallaxLayer className="Strand" offset={4} speed={0.1}>
				<MovingBackground />
			</ParallaxLayer>
			<ParallaxLayer offset={5} speed={1}>
				<Text4 />
			</ParallaxLayer>
			<ParallaxLayer offset={6} sticky={{ start: 6, end: 8 }} speed={0.1}>
				<div className="animation-layer" id="parallax-01">
					<img src={BackgroundHeks} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={6} sticky={{ start: 6, end: 8 }} speed={0.1}>
				<ZeemeerminRechts />
			</ParallaxLayer>
		</Parallax>
	);
}
export default MyProject;
