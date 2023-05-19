import React from "react";

const Theme = (props) => {
	return (
		<>
			<div className=" w-[90%] place-self-center">
				<img className="h-[90%] drop-shadow-md w-full rounded-xl mb-6" src={props.imgsrc} />
				<h3 className="text-[3rem] font-semibold">{props.title}</h3>
			</div>
		</>
	);
};

export default Theme;
// h-[80vh]
