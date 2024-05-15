import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Data from "../Data/data.json"; // Zorg ervoor dat het pad klopt naar jouw data.json bestand
import picture from "../assets/picture.jpeg";
import "../App.css";

function Slideshow() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		// We gebruiken de JSON data direct
		const popularItems = Data.filter((item) => item.popular); // Aannemende dat er een 'popular' veld is
		setItems(popularItems);
	}, []);

	return (
		<Carousel className="carousel" showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
			{items.map((item, index) => (
				<div className="homeCarousel" key={index}>
					<img src={picture} alt={item.Student} /> {/* Zorg ervoor dat 'image' veld aanwezig is in JSON */}
					<p className="legend">{item.Student}</p>
				</div>
			))}
		</Carousel>
	);
}

export default Slideshow;
