import Image from "../assets/picture.jpeg";

function FairyItem() {
	return (
		<div className="box">
			<img className="image" src={Image} alt="image" />
			<li className="itemDetail">
				<label>Naam Sprookje</label>
				<label>Naam student</label>
			</li>
		</div>
	);
}
export default FairyItem;
