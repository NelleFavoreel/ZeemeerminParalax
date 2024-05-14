import React, { useState } from "react";
import FairyItem from "../pages/FairyItem";
import Data from "../Data/data.json";

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredData = Data.filter((item) => {
		return item.Student.toLowerCase().includes(searchTerm.toLowerCase()) || (item["Beschrijving project"] && item["Beschrijving project"].toLowerCase().includes(searchTerm.toLowerCase()));
	});

	return (
		<div>
			<input className="SearchBar" type="text" placeholder="Zoek sprookje" value={searchTerm} onChange={handleSearch} />
			<ul className="fairyItem">
				{filteredData.map((item, index) => (
					<FairyItem key={index} student={item.Student} beschrijving={item["Beschrijving project"]} />
				))}
			</ul>
		</div>
	);
}

export default SearchBar;
