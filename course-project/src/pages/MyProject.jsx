import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "../assets/koraal.png";
import BackgroundHeks from "../assets/heksAchtergrond.png";
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
import Text5 from "../components/Text5";
import Text6 from "../components/Text6";
import Text7 from "../components/Text7";
import "./Project.css";
import Landscape from "../components/Landscape";
import WalkingPrince from "../components/WalkingPrince";
import Text8 from "../components/Text8";
import Text3 from "../components/Text3";

function MyProject() {
	return (
		<Parallax pages={15} style={{ top: "0", left: "0" }}>
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
			<ParallaxLayer offset={6} speed={1} sticky={{ start: 4, end: 4 }} style={{ zIndex: 2 }}>
				<Text3 />
			</ParallaxLayer>
			<ParallaxLayer offset={4} sticky={{ start: 5, end: 5 }} speed={1} style={{ zIndex: 1 }}>
				<SwimmingZeemeermin />
			</ParallaxLayer>
			<ParallaxLayer className="Strand" sticky={{ start: 4, end: 5 }} offset={4} speed={0.1} style={{ zIndex: 0 }}>
				<MovingBackground />
			</ParallaxLayer>
			<ParallaxLayer offset={6} speed={1} sticky={{ start: 5, end: 5 }} style={{ zIndex: 2 }}>
				<Text4 />
			</ParallaxLayer>
			<ParallaxLayer offset={6} sticky={{ start: 6, end: 7 }} speed={0.1}>
				<div className="animation-layer" id="parallax-01">
					<img src={BackgroundHeks} />
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={6} sticky={{ start: 6, end: 7 }} speed={0.1}>
				<ZeemeerminRechts />
			</ParallaxLayer>
			<ParallaxLayer offset={6} sticky={{ start: 6, end: 7 }} speed={0.1}>
				<Text5 />
			</ParallaxLayer>
			<ParallaxLayer offset={8} sticky={{ start: 8, end: 8 }} speed={1}>
				<Text6 />
			</ParallaxLayer>
			<ParallaxLayer offset={9} sticky={{ start: 9, end: 10 }}>
				<Landscape></Landscape>
			</ParallaxLayer>
			<ParallaxLayer offset={9} sticky={{ start: 9, end: 11 }}>
				<WalkingPrince></WalkingPrince>
			</ParallaxLayer>
			<ParallaxLayer offset={11} sticky={{ start: 12, end: 12 }}>
				<Text7></Text7>
			</ParallaxLayer>
			<ParallaxLayer offset={12} sticky={{ start: 13, end: 15 }}>
				<Text8></Text8>
			</ParallaxLayer>
		</Parallax>
	);
}
export default MyProject;
