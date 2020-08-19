import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>My contact details actually go here ma man.</p>
            <p><Link to="https://github.com/FlorianSdorra">Contact me.</Link></p>
        </Layout>
    )
}

export default ContactPage;