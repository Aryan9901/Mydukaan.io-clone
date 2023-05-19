import React from "react";
import hdata from "./hdata";
import Heading from "./Heading";
import predata from "./predata";
import Shop from "./Shop";

const Services = () => {
	return (
		<>
			<div className=" w-full pt-28 pb-20 bg-[#FAFAFA]">
				<Heading data={hdata[3].data} />
				<Heading data={hdata[4].data} />
				<div className="flex lg:flex-row flex-col items-center lg:px-24 px-16 lg:mt-32 mt-16 justify-evenly w-full">
					{predata.map((value) => {
						return <Shop imgsrc={value.img} title={value.title} tag={value.tag} />;
					})}
				</div>
				<button className="mx-auto w-fit py-5 px-10 lg:mt-2 mt-16 block mb-20 hover:-translate-y-1 ease-in-out duration-300 text-[2.5rem] border-[1px] rounded-lg border-black">
					View All
				</button>
			</div>
		</>
	);
};
export default Services;
