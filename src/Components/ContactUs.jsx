import React, { useRef } from 'react';
import contactImg from '../assets/contact-img.jpg'
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import lottiePhone from '../assets/phone.json'
import lottieMail from '../assets/mail.json'
import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
const ContactUs = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k4fms09', 'template_3d3yrou', form.current, {
                publicKey: '_3N_IId1uTjh9gK1F',
            })
            .then(
                () => {
                    // console.log();
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id='contact' className="text-gray-300 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">
                    Contact With Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img
                            src={contactImg}
                            alt="Contact img"
                            className="rounded-lg h-60 w-full object-cover mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-gray-100">Md. Habib Ullah Chowdhury</h3>
                        <p className="text-gray-400">Full Stack Web-developer</p>
                        <p className="mt-4">
                            Let’s build something amazing together!
                            Feel free to reach out to discuss projects
                            or collaborations.
                        </p>
                        <div className="mt-3">
                            <p className='flex items-center'>
                                <strong className=''><Lottie className='h-10 w-10' animationData={lottiePhone} loop={true}></Lottie></strong> 01613516358
                            </p>
                            <p className='flex items-center'>
                                <strong><Lottie className='h-7 w-10' animationData={lottieMail} loop={true}></Lottie></strong>{" "}
                                <a
                                    href="mailto:habibullahalquaderi2005@gmail.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    habibullahalquaderi2005@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-3">
                            <div>
                                <p>FIND ME</p>
                                <div className='flex gap-3'>
                                    <div className='p-2 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://www.facebook.com/prince.jihan.779'><FiFacebook /></Link></div>
                                    <div className='p-2 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://x.com/HAlquaderi34259'><FiTwitter /></Link></div>
                                    <div className='p-2 shadow-xl bg-slate-900 rounded-md text-2xl'><Link to='https://www.instagram.com/chowdhuryjihan30'><FiInstagram /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name='from_name'
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    name='phone_number'
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                name='from_email'
                                className="w-full mt-6 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name='subject'
                                placeholder="Subject"
                                className="w-full mt-6 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                name='message'
                                rows="8"
                                className="w-full mt-6 px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-200"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;