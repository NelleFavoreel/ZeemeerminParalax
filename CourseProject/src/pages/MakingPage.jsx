import { Outlet, Link } from "react-router-dom";

function MakingPage() {
	return (
		<div>
			<div className="makingOf">
				<div>
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
				<div>
					<img src="./" alt="" />
				</div>
			</div>
			<div>
				<div className="footer">
					<img src="./assets/logo.png" alt="" />
					<ul id="nav">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/ProjectPage">Sprookje</Link>
						</li>
						<li>
							<Link to="/MakingPage">Making of</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MakingPage;
