import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importeer Link van React Router
import "../App.css";

function Slideshow({ data }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Functie om naar de volgende afbeelding te gaan
	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
	};

	// Automatisch naar de volgende afbeelding gaan om de 3 seconden
	useEffect(() => {
		const interval = setInterval(nextImage, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="slideshow-container">
			{data.map((item, index) => (
				<div key={index} className={`slide ${index === currentImageIndex ? "active" : ""}`}>
					<Link to={`/student/${item.id}`} className="slide-content">
						{" "}
						{/* Verander "item.id" naar de unieke ID van de student */}
						<h2 className="student-name">{item.Student}</h2>
						<p className="project-description">{item["Beschrijving project"]}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Slideshow;
