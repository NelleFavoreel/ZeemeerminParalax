import { Outlet, Link } from "react-router-dom";
import picture from "../assets/BeginPicture.jpg";
import video from "../assets/filmpje nelle.mp4";
import Zeemeermin from "../assets/zeemeermin.png";
import prins from "../assets/land prins.png";
import heks from "../assets/heks.png";
import meisje from "../assets/meisje.png";
import logo from "../assets/logo.png";
function MakingPage() {
	return (
		<div>
			<div className="makingOf">
				<div className="makingOfText">
					<h1>Making of</h1>
					<h2>Project De kleine zeemeermin</h2>
					<p>
						Voor het vak frontend moeten we een website maken, inclusief een website over een sprookje. Ik heb gekozen voor het sprookje De Kleine Zeemeermin. Ik vond dit sprookje altijd al erg leuk, en ik vind de onderwaterwereld altijd heel
						interessant.
					</p>
					<p>
						De volgende zaken heb ik allemaal gebruikt: <br /> <br /> React: Een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces. <br /> React Router: Voor het beheren van de navigatie en routing binnen de applicatie. <br />{" "}
						React-spring: Een bibliotheek voor animaties in React, gebruikt voor het implementeren van het parallax-effect. <br /> CSS: Voor de opmaak en het stylen van de componenten. <br /> JavaScript (ES6+): Voor het schrijven van de logica en
						functionaliteit van de applicatie. <br /> JSON: Voor het opslaan en ophalen van de gegevens van de sprookjes. <br /> React hooks: Zoals useState en useEffect voor het beheren van de componenttoestand en bijwerkingen. <br /> React-spring
						hooks: Zoals useSpring en useInView voor animaties en scroll-triggered effecten.
					</p>
					<h2>
						By <br />
						Nelle Favoreel
					</h2>
				</div>
				<div className="pictureMakingOf">
					<img className="beginPicture" src={picture} alt="" />
				</div>
			</div>
			<div className="video">
				<h1>Video</h1>
				<video controls width="600" height="400">
					<source src={video} type="video/mp4" />
					Jouw browser ondersteunt de video tag niet.
				</video>
			</div>
			<div>
				<div className="video">
					<h1>Extra beeld materiaal</h1>
				</div>
				<div className="flex2">
					<img className="heksExtra" src={Zeemeermin} alt="" />
					<img className="heksExtra" src={prins} alt="" />
					<img className="extraBeeld" src={heks} alt="" />
					<img className="heksExtra" src={meisje} alt="" />
				</div>
			</div>
			<div>
				<div className="footer">
					<img className="logo" src={logo} alt="" />
					<ul id="nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/MakingPage">Making of</Link>
						</li>
						<li>
							<Link to="/ProjectPage">Sprookje</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MakingPage;
