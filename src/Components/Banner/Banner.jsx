import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import 'swiper/css';

// import required modules
import { EffectCards } from 'swiper/modules';

import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    return (
        <div className=" relative w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center p-4 rounded-lg bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vashu_bihar1.jpg/1024px-Vashu_bihar1.jpg)] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className=" relative z-10 text-left md:flex-1 p-4 order-last md:order-first space-y-5">
                <h1 className="text-xl md:text-3xl font-bold text-white">Welcome to Our Adventure Website</h1>
                <h1 style={{ margin: 'auto 0', fontWeight: 'normal', color: "#FFF" }}>
                    Explore the Simplicity of{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Nature', 'Exploration', 'Adventure', 'Excitement']}
                            loop="infinity"
                            cursor
                            cursorStyle='__'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </span>
                </h1>
                <p className="mt-2 text-white text-sm">Join us on a journey into the wilderness and experience the great outdoors like never before.</p>
                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150">Discover More</button>
            </div>
            <div className=" md:flex-1 p-2 flex justify-center items-center">
                <div className="w-full">
                    <div className="relative">
                        <div className="swiper">
                            <div className='w-full h-full mx-auto'>
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="mySwiper md:w-[70%] mx-auto"
                                >
                                    <SwiperSlide className='rounded-lg'><img className='w-full' src="https://img.freepik.com/premium-photo/touriest-close-up-hand-feeding-kangaroo-national-park-australia-summer_866797-3574.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide className='rounded-lg'><img className='w-full' src="https://img.freepik.com/premium-photo/touriest-close-up-hand-feeding-kangaroo-national-park-australia-summer_866797-3574.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide className='rounded-lg'><img className='w-full' src="https://img.freepik.com/premium-photo/touriest-close-up-hand-feeding-kangaroo-national-park-australia-summer_866797-3574.jpg" alt="" /></SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;