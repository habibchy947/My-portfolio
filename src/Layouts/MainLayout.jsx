import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-8xl mx-auto font-poppins'>
            {/* navbar */}
            <div className='shadow-lg'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainLayout;