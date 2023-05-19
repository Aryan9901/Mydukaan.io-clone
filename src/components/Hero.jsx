import React from "react";

const Hero = () => {
	return (
		<>
			<div className="xl:h-[120%] lg:h-[140%] md:h-[240%] sm:h-[230%] h-[220%] xl:mt-0 lg:mt-10 md:mt-28  sm:mt-14 mt-5 pt-72 xl:pt-20 md:pt-44 sm:pt-56  border-t-0 w-full bg-[url('../src/assets/hero-bg.webp')] bg-cover bg-center flex justify-between item-center lg:flex-row flex-col">
				<div className="flex items-start justify-center flex-col xl:gap-12 lg:gap-16 md:gap-14 sm:gap-16 gap-8 sm:pl-32 pl-10 lg:w-1/2 w-full lg:h-full h-[37%]">
					<h1 className="hero-head w-full lg:text-[6rem] md:text-[5rem] sm:text-[4rem] text-[3.5rem] leading-tight text-left sm:font-extrabold font-bold">
						The global commerce platform, built for performance
					</h1>
					<p className=" hero-head w-[90%] text-[2.2rem] text-slate-600 ">
						Effortlessly launch a stunning online store, attract and convert more customers.
					</p>
					<button className=" hero-head w-fit py-7 px-10 rounded-lg text-white font-bold text-[2.5rem] bg-[#115F9C] ease-in-out duration-700 brightness-125 hover:brightness-95 hover:-translate-y-1">
						Start 7-day free trial
					</button>
					<p className="text-3xl text-slate-500 flex item-center">
						Also available on <i class="ri-apple-fill text-black ml-5 mr-5 text-4xl "></i>
						<img className="w-12" src="../src/assets/playstore.png" alt="play store" />
					</p>
				</div>
				<div className="flex items-center overflow-hidden justify-center lg:w-1/2 w-full lg:h-full sm:h-[63%] h-[80%]">
					<img
						className="hero-img pointer-events-none h-[70%] w-[100%] sm:scale-y-125 sm:scale-x-150 sm:translate-x-96 translate-x-0"
						src="../src/assets/hero-img.webp"
					/>
				</div>
			</div>
		</>
	);
};
export default Hero;
