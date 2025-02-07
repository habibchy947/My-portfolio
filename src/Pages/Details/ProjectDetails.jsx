import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../Utils/useFetch';

const ProjectDetails = () => {
    const { id } = useParams()
    const projects = useFetch("/projects.json")
    const project = projects.find(singleProject => singleProject.id == id)
    // console.log(project)
    // console.log(id)
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className=' py-20 space-y-5 bg-slate-900'>
                <h2 className='text-6xl text-center font-bold text-white'>Project Details</h2>
                <p className='text-center text-2xl font-semibold text-gray-100'>Projects || Details</p>
            </div>
            <div>
                <img className='w-full mb-10' src={project && project.image} alt="" />
            </div>
            <div className='flex items-center justify-between'>
            <h1 className="text-3xl font-semibold text-pink-500">{project && project.name}</h1>
            <div className="flex space-x-4">
                <Link to={project && project.liveLink}
                    className="px-6 py-2 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-700 transition duration-200"
                >
                    Live Demo
                </Link>
                <Link to={project && project.repoLink}
                    className="px-6 py-2 border border-pink-400 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-700 transition duration-200"
                >
                    View Repository
                </Link>
            </div>
            </div>
            <div className="divider"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* project description */}
                <div className=''>
                    <p className=" text-lg text-gray-100">{project && project.description}</p>
                    <div className='mt-10'>
                        <h2 className="text-2xl font-semibold mt-6 text-gray-50">Key Features</h2>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-200">
                            {project && project.features.map((feature, index) => (
                                <li key={index} className="text-lg">{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    {/* project goals */}
                    <h2 className="text-2xl font-semibold text-gray-50">Project Goals</h2>
                    <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-200">
                        {project && project.projectGoals.map((goal, index) => (
                            <li key={index} className="text-lg">{goal}</li>
                        ))}
                    </ul>
                    {/* technologies */}
                    <div className='mt-10'>
                        <h2 className="text-2xl font-semibold text-gray-50">Technologies Used</h2>
                        <ul className="mt-4 flex flex-wrap items-center gap-4">
                            {project && project.technologies.map((tech, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 bg-gray-200 text-gray-900 rounded-full text-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* challenge faced */}
                    <div className='mt-8'>
                        <h2 className="text-2xl font-semibold mt-6 text-gray-50">Challenge Faced</h2>
                        <ul className="mt-3 space-y-2 list-disc pl-6 text-gray-200">
                            {project && project.challengesFaced.map((challenge, index) => (
                                <li key={index} className="text-lg">{challenge}</li>
                            ))}
                        </ul>
                    </div>
                    {/* improvements */}
                    <div className='mt-8'>
                        <h2 className="text-2xl font-semibold mt-6 text-gray-50">Improvements</h2>
                        <ul className="mt-3 space-y-2 list-disc pl-6 text-gray-200">
                            {project && project.potentialImprovements.map((improvement, index) => (
                                <li key={index} className="text-lg">{improvement}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            {/* <div className="mt-6 flex space-x-4 mb-10">
                <Link to={project && project.liveLink}
                    className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-700 transition duration-200"
                >
                    Live Demo
                </Link>
                <Link to={project && project.repoLink}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-700 transition duration-200"
                >
                    View Repository
                </Link>
            </div> */}
        </div>
    );
};

export default ProjectDetails;