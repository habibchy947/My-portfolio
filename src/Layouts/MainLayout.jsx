import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto font-poppins'>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
        </div>
    );
};

export default MainLayout;