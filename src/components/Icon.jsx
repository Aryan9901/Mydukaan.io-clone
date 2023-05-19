import React from "react";

const Icon = (props) => {
	return (
		<>
			<img className="w-[7%] rounded-lg" src={props.imgsrc} style={props.style} />
		</>
	);
};

export default Icon;
