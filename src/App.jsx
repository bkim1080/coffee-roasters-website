import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import styles from "./App.module.css";

import AboutUsPage from "./components/pages/AboutUsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import SubscribePage from "./components/pages/SubscribePage";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div className={styles.container}>
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
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
