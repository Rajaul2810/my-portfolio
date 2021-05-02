import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
             <Header></Header>
             <About></About>
             <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;