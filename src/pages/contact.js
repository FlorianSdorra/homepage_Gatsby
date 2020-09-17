import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <div className={contactStyles.container}>
                <div className={contactStyles.intro}>
                    <h1>Contact</h1>
                    <p className={contactStyles.inner}>Get in touch with me.</p>
                </div>
                <div className={contactStyles.contactBox}>
                    <p>LinkedIn</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>  
            </div>
        </Layout>
    )
}

export default ContactPage;