import { useState } from "react";
import "./App.css";
import "./Fairy.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

//import pages
import HomePage from "./pages/Homepage";
import MakingPage from "./pages/MakingPage";
import Navigation from "./pages/Navigation";
import ProjectPage from "./pages/ProjectsPage";
import Layout from "./pages/Layout";
import MyProject from "./pages/MyProject";

function App() {
	return (
		<>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="makingPage" element={<MakingPage />} />
						<Route path="navigation" element={<Navigation />} />
						<Route path="projectPage" element={<ProjectPage />} />
					</Route>
					<Route path="myProject" element={<MyProject />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
