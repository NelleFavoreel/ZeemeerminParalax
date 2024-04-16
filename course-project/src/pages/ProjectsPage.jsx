import FairyItem from "./FairyItem";

function ProjectPage() {
	return (
		<div className="projectPage">
			<div className="sortProject">
				<input type="text" placeholder="Zoek sprookje" id="" />
				<h2>Categroie</h2>
				<button>Horror</button>
				<button>Kind vriendelijk</button>
				<button>Gebroeders Grim</button>
				<button>Griekse verhalen</button>
				<button>Kind vriendelijk</button>
				<h2>Sorteren op</h2>
				<button>Nieuwste</button>
				<button>Oudste</button>
				<h2>Beste beoordeeld</h2>
				<button>Hoogste</button>
				<button>Laagste</button>
			</div>
			<div>
				<ul className="fairyItem">
					<FairyItem></FairyItem>
					<FairyItem></FairyItem>
					<FairyItem></FairyItem>
					<FairyItem></FairyItem>
					<FairyItem></FairyItem>
				</ul>
			</div>
		</div>
	);
}

export default ProjectPage;
