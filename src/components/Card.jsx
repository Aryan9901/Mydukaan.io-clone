import React from "react";

const Card = (props) => {
	return (
		<>
			<div
				key={props.id}
				className="py-16 flex-col rounded-2xl flex items-center justify-center md:gap-y-[2rem] gap-y-[1rem] bg-white shadow-md max-w-full"
			>
				<img className="md:w-[15%] w-[20%] h-auto" src={props.icon} />
				<h3 className="md:text-[3.2rem] sm:text-[2.7rem] text-[1.5rem] font-semibold">{props.title}</h3>
				<p className="md:text-[2.1rem] sm:text-[1.7rem] text-[1remrem] text-[#5c5c5c] tracking-wide text-center w-[86%]">{props.descp}</p>
			</div>
		</>
	);
};

export default Card;
// h-[48vh]
