import { Outlet, Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<div className="search">
				<input type="text" placeholder="Zoek hier topic" />
				<h3>Categorie</h3>
				<button className="button">Zoek</button>
			</div>
			<div className="slideshow">
				<h2>Populair vandaag</h2>
				<h2>Foto's komen nog</h2>
				<li className="seeMore">
					<Link to="/">Zie meer</Link>
				</li>
			</div>
			<div className="aboutUs">
				<h2>About us</h2>
				<h3>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
					aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
					luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
				</h3>
			</div>
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
	);
}

export default Home;
