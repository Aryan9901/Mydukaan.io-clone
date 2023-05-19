import React from "react";

const Navbar = () => {
	return (
		<>
			<div className="z-40 top-0 bg-white fixed flex xl:px-32 px-10 items-center justify-between shadow-lg w-[100vw] xl:h-40 lg:h-[15%] md:h-[18%] h-[19%]">
				<div className="h-full xl:w-[47%] lg:w-[58%] md:w-[37%] sm:w-[40%] flex items-center lg:px-14 xl:px-20 lg:justify-around xl:justify-around md:gap-6">
					<img
						className="xl:h-2/4 lg:h-[42%] md:h-[39%] sm:h-[45%] h-[50%] ml-20 lg:mr-14 sm:ml-20 md:mr-14 xl:mr-28"
						src="../src/assets/logo.png"
						alt="logo img"
					/>
					<p className="cursor-pointer text-gray-950 xl:text-4xl lg:text-3xl md:text-3xl  lg:flex items-center xl:gap-5 lg:gap-4 md:gap-3 xl:mr-20 lg:mr-0 md:mr-14 hidden">
						Products
						<img
							className="xl:w-[19%] lg:w-[15%] md:w-[11%] lg:inline-block hidden hover:rotate-180 ease-out duration-700"
							src="../src/assets/down-arrow.png"
						/>
					</p>
					<p className="cursor-pointer text-gray-950 xl:text-4xl lg:text-3xl md:text-3xl flex items-center xl:gap-5 lg:gap-4 md:gap-3 xl:mr-20  lg:mr-0 md:mr-14 lg:flex hidden">
						Company
						<img
							className="xl:w-[19%] lg:block lg:w-[15%] md:w-[11%] hover:rotate-180 ease-out duration-700 hidden"
							src="../src/assets/down-arrow.png"
						/>
					</p>
					<p className="cursor-pointer text-gray-950 lg:block xl:text-4xl lg:text-3xl md:text-3xl flex items-center xl:gap-5 lg:gap-4 hidden">
						Pricing
					</p>
				</div>
				<div className="h-full xl:w-[27%] lg:w-[27%] md:h-[30%] flex items-center justify-evenly xl:-mr-7 lg:-mr-10 md:mr-0">
					<p className="xl:text-4xl lg:text-3xl md:text-3xl md:mr-11 lg:block hidden">Sign In</p>
					<button className="ease-in-out duration-700 font-bold xl:text-4xl lg:block md:text-3xl text-white xl:py-7 md:py-8 xl:px-10 md:px-12 xl:rounded-md md:font-semibold md:rounded-md hidden bg-[#115F9C] brightness-125 hover:brightness-95 hover:-translate-y-1 ">
						Start Free Trial
					</button>
				</div>
				<img src="../../src/assets/hamberger.png" className="lg:hidden md:w-28 sm:w-20 rotate-90 mr-20" />
			</div>
		</>
	);
};
export default Navbar;

// className="z-40 fixed flex px-32 items-center justify-between shadow-lg w-full h-40"
