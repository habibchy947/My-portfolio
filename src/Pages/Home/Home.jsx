import React from 'react';
import Banner from '../../Components/Banner';
import AboutMe from '../../Components/AboutMe';
import Skills from '../../Components/Skills';
import EducationalQualification from '../../Components/EducationalQualification';
import MyProjects from '../../Components/MyProjects';
import ContactUs from '../../Components/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationalQualification></EducationalQualification>
            <MyProjects></MyProjects>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;