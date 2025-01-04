import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/portfolio-logo.png'
const Navbar = () => {
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/'>Projects</NavLink></li>
            <li><NavLink to='/'>Skills</NavLink></li>
            <li><NavLink to='/'>Skills</NavLink></li>
        </>
   
    return (
        <div className="navbar px-0 w-11/12 mx-auto sticky top-0">
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
                    className="btn btn-ghost font-semibold border-pink-500 shadow-lg">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;