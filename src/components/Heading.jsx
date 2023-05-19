import React from "react";

const Heading = (props) => {
	return (
		<>
			<h1 className="md:text-[4rem] sm:text-[3rem] text-[3rem] lg:w-[55%] md:w-[73%] sm:w-[80%] w-[90%] text-center font-extrabold mx-auto">
				{" "}
				{props.data}{" "}
			</h1>
		</>
	);
};

export default Heading;
