import React from "react";
import Image from "../assets/picture.jpeg";

function FairyItem({ student, beschrijving }) {
	return (
		<div className="box">
			<img className="image" src={Image} alt="image" />
			<li className="itemDetail">
				<label>{student}</label>
				<label>{beschrijving || "Geen beschrijving beschikbaar"}</label>
			</li>
		</div>
	);
}

export default FairyItem;
