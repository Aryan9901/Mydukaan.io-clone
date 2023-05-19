import React from "react";
import Row from "./Row";
import Heading from "./Heading";
import sdata from "./sdata";
import hdata from "./hdata";

const Cta = () => {
	return (
		<>
			<div className="w-full bg-white lg:pt-64 md:pt-56 sm:pt-44 pt-32">
				<Heading data={hdata[0].data} />
				{sdata.map((value) => {
					return (
						<Row
							key={value.id}
							imgs={value.imgsrc}
							heading={value.heading}
							s1={value.st1}
							s2={value.st2}
							s3={value.st3}
							s4={value.st4}
							s5={value.st5}
							order1={value.order1}
							order2={value.order2}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Cta;
{
	/* <h2 className="text-[4.6rem] text-center mb-56 font-bold w-[52%] mx-auto">

Be it a startup or a legacy bussiness, here's why you need Dukaan
</h2> */
}
