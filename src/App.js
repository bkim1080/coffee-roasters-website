import React from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<Collection />
		</div>
	);
}

export default App;
