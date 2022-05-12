import React from "react";
import "./App.css";
import Collection from "./components/Collection/Collection";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plan from "./components/Plan/Plan";

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<Collection />
			<Features />
			<Plan />
			<Footer />
		</div>
	);
}

export default App;
