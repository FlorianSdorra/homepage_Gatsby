import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>Here are some details going as well.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
        
    )
}

export default AboutPage;