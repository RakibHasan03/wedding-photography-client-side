import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/2892199/pexels-photo-2892199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}

                      
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Make Your Wedding
                                    <br />A Successful Story
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    Because every picture should be unique, Making your special day.We will make a wonderful story
                                </p>
                                <Link to='/services'>
                                    <button className="gradient-button px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/1026390/pexels-photo-1026390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Make Your Wedding
                                    <br />A Successful Story
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6">

                                    Because every picture should be unique, Making your special day.We will make a wonderful story
                                </p>
                                <Link to='/services'>
                                    <button className="gradient-button px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl"
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/1779416/pexels-photo-1779416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}
                        
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Make Your Wedding
                                    <br />A Successful Story
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6">

                                    Because every picture should be unique, Making your special day.We will make a wonderful story
                                </p>
                                <Link to='/services'>
                                    <button className="gradient-button  px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"  https://images.pexels.com/photos/1405674/pexels-photo-1405674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Make Your Wedding
                                    <br />A Successful Story
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6">

                                    Because every picture should be unique, Making your special day.We will make a wonderful story
                                </p>
                                <Link to='/services'>
                                    <button className="gradient-button px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Our Services
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}