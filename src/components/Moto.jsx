import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

const Moto = () => {
	return (
		<>
			<div className=" w-full  ">
				<h1 className="xl:text-[4.2rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[2.9rem] text-[1.6rem] lg:mt-44 mt-12 text-center font-bold">
					We are in the business of building entrepreneurs.
				</h1>
				<p className="lg:w-3/4 w-[75%] mt-10 mb-14 mx-auto text-center xl:text-[2.5rem] lg:text-[2rem] md:text-[2rem] sm:text-[1.7rem] text-[1.2rem] ">
					We are a team of dark horses who believe that technology will ignite the next industrial revolution. Our mission is to reshape the
					digital retail landscape by defining the future of commerce.
				</p>
				<div className="lg:mt-32 md:mt-24 mt-12 bg-cover w-full">
					<Player
						muted
						fluid
						loop
						userActivity="false"
						autoPlay="true"
						playsInline
						poster="../assets/ama.png"
						src="../../src/assets/video1.mp4"
					/>
				</div>
				<div className="min-h-[30vh] overflow-hidden w-full bg-[url(../../src/assets/gradfoot.png)] flex items-center justify-evenly">
					<div className="h-fit leading-none pl-10 text-white lg:font-extrabold md:font-semibold font-normal border-solid border-l border-neutral-300 ">
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">100+</h2>
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">Countries</h2>
					</div>
					<div className="h-fit  leading-none pl-10 text-white lg:font-extrabold md:font-semibold font-normal border-solid border-l border-neutral-300 ">
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">9,200+</h2>
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">Cities covered</h2>
					</div>
					<div className="h-fit leading-none pl-10 text-white lg:font-extrabold md:font-semibold font-normal border-solid border-l border-neutral-300 ">
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">220+</h2>
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">Employees</h2>
					</div>
					<div className="h-fit leading-none pl-10 text-white lg:font-extrabold md:font-semibold font-normalborder-solid border-l border-neutral-300 ">
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">Millions</h2>
						<h2 className="xl:text-[3rem] lg:text-[2.7rem] md:text-[2.4rem] sm:text-[2rem] text-[1.2rem]">of Entrepreneurs</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default Moto;
// ../../src/assets/video1.mp4
