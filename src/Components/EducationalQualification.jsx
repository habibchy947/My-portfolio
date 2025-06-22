import React from 'react';

const EducationalQualification = () => {
    return (
        <div className='py-5 w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
            <h2 className='text-center text-gray-50 text-4xl md:text-5xl font-bold mb-12'>Educational Qualification</h2>
            <div className='md:flex justify-between gap-3 space-y-5 md:space-y-0'>
                <div className='md:w-[45%] flex-col bg-gray-800 rounded-md p-10'>
                    <h2><span className='text-lg font-semibold text-gray-50'>Honors : </span>Bachelor of Social Science(Honors)</h2>
                    <h2><span className='text-lg font-semibold text-gray-50'>Institution : </span>Chittagong University</h2>
                    <h2><span className='text-lg font-semibold text-gray-50'>Subject : </span>Political Science</h2>
                    <h2><span className='text-lg font-semibold text-gray-50'>Status : </span>First Year</h2>
                </div>
                <div className='border-4 border-pink-400  md:h-52 rounded-lg'></div>
                <div className='md:w-[45%]  flex-col p-10 bg-gray-800 rounded-md'>
                    <h2><span className='text-lg font-semibold text-gray-50'>Degree : </span>Fazil(degree)</h2>
                    <h2><span className='text-lg font-semibold text-gray-50'>Institution : </span>Jamia Ahmadia Sunnia Alia Madrasah</h2>
                    <h2><span className='text-lg font-semibold text-gray-50'>Status : </span>First Year</h2>
                </div>
            </div>
        </div>
    );
};

export default EducationalQualification;