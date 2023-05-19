import React from "react";

const Shop = (props) => {
	return (
		<>
			<div className="lg:w-[30%] w-[80%]  lg:h-[60vh] h-auto flex-col mt-20 mb-2 inline-block">
				<img src={props.imgsrc} className="h-[50%]" />
				<p className="lg:text-[1.7rem] sm:text-[2.4rem] text-[2rem]  lg:text-start text-center font-light mt-7 mb-7 text-[#656]">
					{props.tag}
				</p>
				<h1 className="lg:text-[2rem] sm:text-[2.2rem] text-[2rem] lg:text-start text-center  font-normal">{props.title}</h1>
			</div>
		</>
	);
};

export default Shop;
