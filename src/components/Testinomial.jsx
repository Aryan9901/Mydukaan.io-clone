import React from "react";
import Heading from "./Heading";
import hdata from "./hdata";
import Swipe from "./Swiper";
const Testinomial = () => {
	return (
		<>
			<div className="pb-56 xl:mt-[20rem] lg:mt-[1rem] md:mt-[1rem] xl:pt-24 lg:pt-16 md:pt-10 pt-7 w-full">
				<img className="mb-20 block w-116 text-center mt-44 mx-auto" src="../../src/assets/quotes.png" />
				<Heading data={hdata[2].data} />
				<p className="xl:text-[2.7rem] lg:text-[2.4rem] md:text-[2.2rem] sm:text-[2rem] text-[1.5rem]  text-center w-full mx-auto mt-8 text-[#566]">
					From beginners to enterprise brands, everyone loves Dukaan!
				</p>
				<div className=" w-full px-20 mt-24">
					<Swipe />
				</div>
			</div>
		</>
	);
};

export default Testinomial;
