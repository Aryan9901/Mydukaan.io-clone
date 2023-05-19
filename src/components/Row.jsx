import React from "react";
const Row = (props) => {
	const ord = {
		order: props.order1,
	};
	const ord2 = {
		order: props.order2,
	};
	return (
		<>
			<div className="flex md:flex-row flex-col xl:items-start lg:items-center xl:justify-normal lg:justify-center md:px-14 xl:px-24 xl:py-24 py-20 w-full ">
				<div style={ord} className="object-cover flex items-center justify-center md:h-full h-1/2 lg:w-[50%] w-full">
					<img src={props.imgs} className="md:w-[85%] w-[75%] object-cover" />
				</div>
				<div
					style={ord2}
					className="lg:h-full  sm:py-10   h-1/2 md:block flex flex-col items-center lg:w-[50%] md:w-fit w-[80%] mx-auto xl:pl-28 lg:pl-16"
				>
					<h2 className=" sm:text-[3.4rem] text-[2.6rem]  xl:mt-24 lg:mt-11  w-full font-medium">{props.heading}</h2>
					<div className="w-[100%] mx-auto">
						<div className="my-10 flex items-center gap-[2rem] w-full">
							<img className="md:inline-block hidden" src="../../src/assets/bullet1.png" />
							<p className="text-4xl">{props.s1}</p>
						</div>
						<div className="my-10 flex items-center gap-[2rem] w-full">
							<img className="md:inline-block hidden" src="../../src/assets/bullet1.png" />
							<p className="text-4xl">{props.s2}</p>
						</div>
						<div className="my-10 flex items-center gap-[2rem] w-full">
							<img className="md:inline-block hidden" src="../../src/assets/bullet1.png" />
							<p className="text-4xl">{props.s3}</p>
						</div>
						<div className="my-10 flex items-center gap-[2rem] w-full">
							<img className="md:inline-block hidden" src="../../src/assets/bullet1.png" />
							<p className="text-4xl">{props.s4}</p>
						</div>
						<div className="my-10 flex items-center gap-[2rem] w-full">
							<img className="md:inline-block hidden" src="../../src/assets/bullet1.png" />
							<p className="text-4xl">{props.s5}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Row;
// ${props.order}
// {props.or + "h-full w-[50%] pl-28"}
