import { Outlet, Link } from "react-router-dom";

function MakingPage() {
	return (
		<div>
			<div className="makingOf">
				<div className="makingOfText">
					<h1>Making of</h1>
					<h2>Project Sneeuwwitje</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
						diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam f
					</p>
					<h2>
						By <br />
						Naam
					</h2>
				</div>
				<div className="pictureMakingOf">
					<h1></h1>
					<img src="./" alt="" />
				</div>
			</div>
			<div className="video">
				<h1>Video</h1>
				<h2>Komt nog</h2>
			</div>
			<div>
				<div className="footer">
					<img src="./assets/logo.png" alt="" />
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
