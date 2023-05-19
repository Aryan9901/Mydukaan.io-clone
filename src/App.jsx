import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Cta from "./components/Cta";
import Store from "./components/Store";
import Gallery from "./components/gallery";
import Plugins from "./components/Plugins";
import Moto from "./components/Moto";
import Services from "./components/Services";
import Testinomial from "./components/Testinomial";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Marquee />
			<Cta />
			<Store />
			<Gallery />
			<Plugins />
			<Moto />
			<Testinomial />
			<Services />
			<Banner />
			<Footer />
		</>
	);
}

export default App;
