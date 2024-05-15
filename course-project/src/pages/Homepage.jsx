import React from "react";
import { Outlet, Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

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
				<Slideshow />
				<li className="seeMore">
					<Link to="/ProjectPage">Zie meer</Link>
				</li>
			</div>
			<div className="aboutUs">
				<h2>About us</h2>
				<h3>Dit project is een opdracht voor de tweedejaarsstudenten aan de Erasmushogeschool Brussel. Het doel is om een webpagina te maken waarbij elke student een sprookje kiest en er een pagina over maakt met behulp van het parallax-effect.</h3>
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
