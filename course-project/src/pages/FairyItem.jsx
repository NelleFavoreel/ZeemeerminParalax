import React from "react";
import Image from "../assets/picture.jpeg";

function FairyItem({ student, beschrijving, link }) {
	return (
		<div className="box">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<img className="image" src={Image} alt="image" />
			</a>
			<li className="itemDetail">
				<label>{student}</label>
				<label>{beschrijving || "Geen beschrijving beschikbaar"}</label>
			</li>
		</div>
	);
}

export default FairyItem;
