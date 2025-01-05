import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profile_img from '../assets/habib_image.png'
const Banner = () => {
    return (
        <div className='flex w-11/12 items-center sm:px-5 lg:px-0 py-16 mx-auto gap-10 flex-col md:flex-row-reverse'>
            <div className='md:w-1/2 h-[450px] flex items-center justify-end relative'>
                <div className=' inset-0 border-8 h-full animate-pulse-border w-full lg:w-2/3 rounded-md object-contain'>
                    <img className=' w-full lg:w-[500px] h-full object-cover' src={profile_img} alt="" />
                </div>
                </div>
            <div className='md:w-1/2'>
                <p className='text-gray-300 text-lg font-semibold mb-3'>Junior Web Developer</p>
                <h1 className='text-5xl sm:text-6xl font-extrabold leading-tight text-gray-50 mb-6'>Hi, I'm <span className='text-pink-600'>Md. Habib Ullah Chowdhury</span></h1>
                <p className='text-gray-300'>A passionate and result driven <span className='text-pink-500'>Full Stack Web Developer</span>.
                    I specialize in crafting modern, user focused web applications using the latest technologies
                    like React, Node.js, Express.js and MongoDB.
                </p>
                <div className='mt-10 flex justify-between items-end'>
                    <div>
                        <p>FIND ME</p>
                        <div className='flex gap-3 mt-2'>
                            <div className='p-3 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://www.facebook.com/prince.jihan.779'><FiFacebook /></Link></div>
                            <div className='p-3 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://x.com/HAlquaderi34259'><FiTwitter /></Link></div>
                            <div className='p-3 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://www.instagram.com/chowdhuryjihan30'><FiInstagram /></Link></div>
                        </div>
                    </div>
                    <div>
                        <a
                            href='/habib_Resume.pdf'
                            download='Habib_Resume.pdf'
                            className='btn btn-ghost font-semibold text-gray-300 border-pink-500 shadow-lg'>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;