import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <p>My contact details actually go here ma man.</p>
            <p><Link to="https://github.com/FlorianSdorra">Contact me.</Link></p>
            <Footer/>
        </div>
    )
}

export default ContactPage;