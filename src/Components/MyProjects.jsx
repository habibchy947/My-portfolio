import React from 'react';
import ProjectCard from './ProjectCard';
import { useFetch } from '../Utils/useFetch';

const MyProjects = () => {
    const projects = useFetch("projects.json")
    // console.log(projects)
    return (
        <div id='projects' className='py-10 w-11/12 mx-auto'>
            <h2 className='text-4xl md:text-5xl text-center font-bold'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
             
            </div>
        </div>
    );
};

export default MyProjects;