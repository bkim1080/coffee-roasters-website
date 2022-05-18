import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import SubscribePage from "./components/pages/SubscribePage";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>
				<Route path="/aboutus">
					<AboutUsPage />
				</Route>
				<Route path="/subscribe">
					<SubscribePage />
				</Route>
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
