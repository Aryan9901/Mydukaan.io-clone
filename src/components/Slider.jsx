import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import mdata from "./mdata";

const Slider = (props) => {
	SwiperCore.use([Autoplay]);
	return (
		<Swiper
			className="h-full w-full mt-2  flex items-center justify-evenly flex-col"
			modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
			spaceBetween={25}
			slidesPerView={2}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			// scrollbar={{ draggable: false, enabled: false, autoplay: true, hide: true }}
			loop={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
		>
			{mdata.map((props, i) => (
				<SwiperSlide
					className=" h-[70vh] pt-28 pb-28  cursor-pointer rounded-2xl w-[47%] flex  flex-col  items-start  justify-center gap-4 px-9 py-8 shadow-md mb-24"
					key={props.logo}
				>
					<img className="mb-14 h-[17%] -mt-6" src={props.logo} alt="slides.name" />
					<h3 className="xl:text-[2.2rem] lg:text-[2rem] md:text-[1.8rem] sm:text-[1.5rem] text-[1.2rem] font-bold -mt-10">
						"{props.head}"
					</h3>
					<p className="xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] text-[1.2rem] text-gray-600">{props.para}</p>
					<div className="flex items-center  w-full">
						<img src={props.prof} className="rounded-full mr-10 xl:w-[20%] lg:w-[17%] md:w-[15%] sm:w-[14%] w-[12%] mt-10 mb-10" />
						<div className="w-[80%] h-full flex items-start justify-center flex-col">
							<h5 className="xl:text-[2.5rem] lg:text-[2.2rem] md:text-[1.9rem] sm:text-[1.7rem] text-[1.2rem] font-bold">
								{props.name}
							</h5>
							<p className="xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] sm:text-[1.6rem] text-[1.2rem] text-gray-700">
								{props.pos}
							</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Slider;
