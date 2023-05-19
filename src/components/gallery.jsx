import React from "react";
import Theme from "./Theme";
import pdata from "./pdata";
const Gallery = () => {
	return (
		<>
			<div className=" w-[100%] py-24 relative">
				<img className="absolute -top-10 -z-10 w-[20%] left-0 " src="../../src/assets/wave.webp" />
				<h1 className="xl:text-[4rem] lg:text-[3.3rem] md:text-[2.7rem] sm:text-[3rem] text-[1.5rem]  mt-24 w-fit mx-auto font-extrabold">
					Kickstart your online store with these themes
				</h1>
				<div className="md:w-[85%] w-full mt-32  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 place-content-center gap-y-28">
					{pdata.map((value, index) => {
						return (
							<>
								<Theme key={index} id={value.id} imgsrc={value.img} title={value.title} />
							</>
						);
					})}
					{/* <Theme imgsrc={pdata[0].img} title={pdata[0].title} /> */}
				</div>
				<button className="mx-auto w-fit py-5 px-10 block mt-24 text-[2.5rem] border-[1px] rounded-lg border-black hover:-translate-y-1 ease-in-out duration-30000">
					View all
				</button>
			</div>
		</>
	);
};

export default Gallery;
// h-[92%]
