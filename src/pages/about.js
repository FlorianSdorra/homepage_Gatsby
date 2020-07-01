import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Here are some details going as well.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <Footer/>
        </div>
        
    )
}

export default AboutPage;