import React from "react";

const Banner = () => {
	return (
		<>
			<div className=" w-full flex items-center justify-center">
				<div className="xl:h-[80vh] lg:h-[89vh] md:h-[93vh] h-auto w-[89%] mt-36 mb-36 mx-auto box-border bg-[url(../../src/assets/servicebg.webp)] bg-cover flex flex-col gap-y-7 justify-center md:items-start items-center md:pl-44 md:py-0 py-24">
					<img className="xl:w-[7%] lg:w-[8%] md:w-[8%] sm:w-[10%] w-[11%]" src="../../src/assets/shopping.png" />
					<h1 className="xl:text-[6rem] lg:text-[5.6rem] md:text-[5.2rem] sm:text-[4.8rem] text-[3rem] font-black ">
						Start selling online.
					</h1>
					<p className="text-[#333] xl:text-[2.5rem] lg:text-[2.23rem] md:text-[2rem] sm:text-[1.8rem] text-[1.4rem] w-[50%] ">
						Take your business online with Dukaan. Get your free online store in 30 seconds.
					</p>
					<button className="lg:px-10 px-7 hover:-translate-y-1 xl:text-[2rem] lg:text-[1.85rem] md:text-[1.7rem] sm:text-[1.6rem]  text-[1.5rem] font-bold rounded-lg w-fit py-5 lg:mt-14 mt-10 bg-black text-white">
						Start 7-day free trial
					</button>
				</div>
			</div>
		</>
	);
};

export default Banner;
