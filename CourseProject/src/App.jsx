import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages
import HomePage from "./pages/Homepage";
import MakingPage from "./pages/MakingPage";
import Navigation from "./pages/Navigation";
import ProjectPage from "./pages/ProjectsPage";
import Layout from "./pages/Layout";

function App() {
	return (
		<>
			<h1>Hallo welkom</h1>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="makingPage" element={<MakingPage />} />
						<Route path="navigation" element={<Navigation />} />
						<Route path="projectPage" element={<ProjectPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
