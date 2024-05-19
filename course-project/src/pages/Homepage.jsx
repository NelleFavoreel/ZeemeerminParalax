import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Data from "../Data/data.json"; // Importeer de voorbeeldgegevens
import logo from "../assets/logo.png";
function Home() {
	return (
		<div>
			<div className="search">
				<input type="text" placeholder="Zoek hier topic" />
				<div className="categorie">
					<h3>Categorie</h3>
					<span className="material-symbols-outlined">arrow_forward_ios</span>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
				</div>
				<button className="button">Zoek</button>
			</div>
			<div className="slideshow">
				<h2>Populair vandaag</h2>
				<Slideshow data={Data} />
				<li className="seeMore">
					<Link to="/ProjectPage">Zie meer</Link>
				</li>
			</div>
			<div className="aboutUs">
				<h2>About us</h2>
				<h3>Dit project is een opdracht voor de tweedejaarsstudenten aan de Erasmushogeschool Brussel. Het doel is om een webpagina te maken waarbij elke student een sprookje kiest en er een pagina over maakt met behulp van het parallax-effect.</h3>
			</div>
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
	);
}

export default Home;
