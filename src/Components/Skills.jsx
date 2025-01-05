import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useFetch } from '../Utils/useFetch';

const Skills = () => {
    const front_end_skills = useFetch('frontend_skills.json')
    const back__end_skills = useFetch('backend_skills.json')
    const tools = useFetch('tools.json')
    return (
        <div id='skill' className='w-11/12 mx-auto py-16'>
            <h2 className='text-5xl text-white font-bold text-center'>My Skills</h2>
            {/* categories */}
            <div className='space-y-10 mt-10'>
                {/* frontend skills */}
                <div>
                    <h3 className='text-2xl flex items-center gap-5 font-semibold text-pink-400'>Frontend Development <span><FaLongArrowAltRight /></span></h3>
                    <div className='mt-7'>
                        <Swiper
                            // slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {
                               front_end_skills && front_end_skills.map((skill, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className='bg-gray-800 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-blend-overlay p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1'>
                                            <div className='flex flex-col items-center justify-center space-y-3'>
                                                <img className='w-12 h-12 hover:scale-110 transition-transform duration-200' src={skill.image} alt="" />
                                                <h4 className='text-xl font-semibold text-pink-400 mt-3'>{skill.skill}</h4>
                                                <progress className="progress text-pink-400 md:w-56 mt-4" value={skill.percentage} max="100"></progress>
                                                
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl flex items-center gap-5 font-semibold text-pink-400'>Backend Development <span><FaLongArrowAltRight /></span></h3>
                    <div className='mt-7'>
                        <Swiper
                            // slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                500: {
                                    slidesPerView: 2, 
                                },
                                768: {
                                    slidesPerView: 3, 
                                },
                                1024: {
                                    slidesPerView: 4, 
                                },
                            }}
                        >
                            {
                                back__end_skills.map((skill, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className='bg-gray-800 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-blend-overlay p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1'>
                                            <div className='flex flex-col items-center justify-center space-y-3'>
                                                <img className='w-12 h-12 hover:scale-110 transition-transform duration-200' src={skill.image} alt="" />
                                                <h4 className='text-xl font-semibold text-pink-400 mt-3'>{skill.skill}</h4>
                                                <progress className="progress text-pink-400 md:w-56 mt-4" value={skill.percentage} max="100"></progress>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl flex items-center gap-5 font-semibold text-pink-400'>Tools <span><FaLongArrowAltRight /></span></h3>
                    <div className='mt-7'>
                        <Swiper
                            // slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                500: {
                                    slidesPerView: 2, 
                                },
                                768: {
                                    slidesPerView: 3, 
                                },
                                1024: {
                                    slidesPerView: 4, 
                                },
                            }}
                        >
                            {
                                tools.map((skill, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className='bg-gray-800 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-blend-overlay p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1'>
                                            <div className='flex flex-col items-center justify-center space-y-3'>
                                                <img className='w-12 h-12 hover:scale-110 transition-transform duration-200' src={skill.image} alt="" />
                                                <h4 className='text-xl font-semibold text-pink-400 mt-3'>{skill.skill}</h4>
                                                <progress className="progress text-pink-400 md:w-56 mt-4" value={skill.percentage} max="100"></progress>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;