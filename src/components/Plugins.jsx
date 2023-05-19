import React from "react";
import idata from "./idata";
import Icon from "./Icon";

const Plugins = () => {
	return (
		<>
			<div className="bg-[#FEF8EB] py-20 w-full pb-20">
				<h1 className="lg:mt-24 mt-10 xl:text-[4.3rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[2.9rem] text-[1.8rem] sm:font-bold font-semibold text-center w-fit mx-auto">
					Enhance your site's functionality with plugins
				</h1>
				<p className="xl:text-[2.3rem] lg:text-[2rem] md:text-[1.6rem] sm:text-[1.4rem] text-[1rem] mt-10 w-[55%] text-center text-[#5e5d5d] mx-auto">
					Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There's a plugin for
					everything.
				</p>
				<div className=" relative lg:mt-44 md:mt-36 sm:mt-28 mt-16 flex items-center justify-around">
					{idata.map((value) => {
						return (
							<>
								<Icon imgsrc={value.img} style={value.style} />
							</>
						);
					})}
				</div>
				<button className="mx-auto w-fit py-5 px-10 block lg:mt-44 md:mt-36 sm:mt-28 mt-20 hover:-translate-y-1 ease-in-out duration-300 text-[2.5rem] border-[1px] rounded-lg border-black">
					Take a Look
				</button>
			</div>
		</>
	);
};

export default Plugins;
