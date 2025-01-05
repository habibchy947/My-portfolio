import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/portfolio-logo.png'
import {Link } from 'react-scroll';
const Navbar = () => {
    const links =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link smooth={true} to='about'>About</Link></li>
            <li><NavLink to='/'>Projects</NavLink></li>
            <li><Link smooth={true} to='skill'>Skills</Link></li>
            
        </>
   
    return (
        <div className="navbar px-2 sm:px-0 mx-auto shadow-lg bg-transparent bg-black z-30 bg-opacity-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  menu-sm dropdown-content bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className=""><img className='h-11 w-11' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a
                    href='https://docs.google.com/document/d/1asxVaV76xjD9jCpvCUKAv1MV4ZYeCYoITb73Rumhzxc/edit?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'
                    className="btn btn-ghost font-semibold text-white border-pink-500 shadow-lg">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;