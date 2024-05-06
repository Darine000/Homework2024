import React from 'react';
import Navbar from './NavBar';
import CourseCard from './courseCard.js';
import Login from './login';
import Description from './description.js';

import Gallery from './Gallery';
import Footer from './Footer';



function App() {
    return (
        <div>
            <Navbar />
            <Description />
            <CourseCard />
            <Gallery />

            <Footer/>
        </div>
    );
}

export default App;
