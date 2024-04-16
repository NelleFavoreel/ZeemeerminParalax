import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Layout() {
	return (
		<>
			<nav>
				<div className="navigation">
					<img className="logo" src={Logo} alt="logo" />
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
						<li>
							<Link to={"/MyProject"}>Mijn project</Link>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
