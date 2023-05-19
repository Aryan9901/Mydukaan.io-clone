import React from "react";
import Heading from "./Heading";
import hdata from "./hdata";
import Card from "./Card";
import cdata from "./cdata";

const Store = () => {
	return (
		<>
			<div className=" w-full bg-[#FEF8EB] pt-20 pb-16">
				<Heading data={hdata[1].data} />
				<p className="mx-auto text-[#555453] md:w-fit text-center block sm:w-[80%] mt-8 md:text-[2.5rem]  text-[2rem]">
					All the tools you need to grow your online business.
				</p>
				<div className="h-[70%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 px-24 my-24">
					{cdata.map((value) => {
						return (
							<>
								<Card id={value.id} icon={value.img1} title={value.head} descp={value.description} />
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Store;
