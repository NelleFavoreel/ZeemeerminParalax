import React from "react";
import SearchBar from "../components/SearchBar";

function ProjectPage() {
	return (
		<div className="projectPage">
			<div className="sortProject">
				<h2>Categorie</h2>
				<button>Horror</button>
				<button>Kindvriendelijk</button>
				<button>Gebroeders Grim</button>
				<button>Griekse verhalen</button>
				<h2>Sorteren op</h2>
				<button>Nieuwste</button>
				<button>Oudste</button>
				<h2>Beste beoordeeld</h2>
				<button>Hoogste</button>
				<button>Laagste</button>
			</div>
			<SearchBar />
		</div>
	);
}

export default ProjectPage;
