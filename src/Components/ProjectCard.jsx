import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    const {image,name,description,id} = project || {}
    
    return (
        /* From Uiverse.io by carlosepcc */
        <div className="card  text-gray-300  hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
            <div className="px-8 py-10">
                <img className='h-56 md:h-52 w-full object-cover' src={image} alt="" />
                <div className="uppercase font-bold text-xl mt-3">
                    {name}
                </div>
                <div className="text-gray-400 mt-3">
                    <p>{description.slice(0,106)}....</p>
                    <Link to={`/projectDetails/${id}`}><button className='btn btn-sm rounded-2xl mt-2 border-pink-400'>View Details <MdArrowOutward className='text-2xl'/></button></Link>
                </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-pink-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
    );
};

export default ProjectCard;