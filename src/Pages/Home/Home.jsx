import React from 'react';
import Banner from '../../Components/Banner';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import EducationalQualification from '../../Components/EducationalQualification';
import MyProjects from '../../Components/MyProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;