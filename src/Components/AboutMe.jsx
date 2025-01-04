import React from 'react';
import profile_img from '../assets/habib_image.png'
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const AboutMe = () => {
    return (
        <div className='flex w-11/12 mx-auto my-10 flex-col md:flex-row items-center gap-6'>
            <div className='flex flex-shrink-0 overflow-hidden border-neutral border-[30px] rounded-md shadow-xl group'>
                <img className="w-full md:h-[470px] md:w-[400px] h-96 object-cover transform transition-transform duration-500 group-hover:scale-110" src={profile_img} alt="" />
            </div>
            <div className='text-center md:text-left'>
                <h2 className='text-5xl font-semibold uppercase text-white'>About Me</h2>
                <h3 className='text-3xl font-semibold text-pink-400 mt-5 md:mt-2 lg:mt-9'>Hi, I'm Md. Habib Ullah Chowdhury</h3>
                <p className='text-gray-300 mt-4 leading-relaxed'>I am a passionate
                    <span className='text-pink-400 font-semibold'> Full Stack Web Developer </span>
                    dedicated to crafting visually stunning and user friendly websites. My journey began with curiosity about website but now
                    I specialize in modern frameworks like <span className='font-semibold'>React</span>,
                    <span className='font-semibold'> Tailwind CSS</span>,
                    <span className='font-semibold'> Javascript</span>,
                    <span className='font-semibold'> Firebase</span>,
                    <span className='font-semibold'> MongoDB</span>,
                    <span className='font-semibold'> Node.js</span>,
                    <span className='font-semibold'> Express.js</span>,
                    always aiming to create seamless user experience. Let's build something amazing together.
                </p>
                <p className='text-gray-300 mt-3 md:mt-2 lg:mt-4 leading-relaxed'>When i'm not coding,
                    you can find me indulging in
                    <span className='font-semibold text-pink-400'> photography</span>,
                    <span className='font-semibold text-pink-400'> cricketing</span>,
                    or, working on creating project that fuel my inspiration.
                </p>
                <div className='flex justify-center md:justify-start gap-3 mt-4 md:mt-2 lg:mt-7'>
                    <div className='p-3 shadow-xl hover:text-pink-400 transition bg-slate-900 rounded-md text-2xl'><Link to='https://www.facebook.com/prince.jihan.779'><FiFacebook /></Link></div>
                    <div className='p-3 shadow-xl hover:text-pink-400 transition bg-slate-900 rounded-md text-2xl'><Link to='https://x.com/HAlquaderi34259'><FiTwitter /></Link></div>
                    <div className='p-3 shadow-xl hover:text-pink-400 transition bg-slate-900 rounded-md text-2xl'><Link to='https://www.instagram.com/chowdhuryjihan30'><FiInstagram /></Link></div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;