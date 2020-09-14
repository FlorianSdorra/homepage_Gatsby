import React from 'react';
import { Link } from 'gatsby';
import Typed from 'react-typed';

import Layout from '../components/layout';
import Head from '../components/head';

import aboutStyles from './about.module.scss';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.intro}>
                    <h1>About</h1>
                    <p className={`${aboutStyles.inner} ${aboutStyles.typefix}`}>
                        <Typed
                        strings={[
                        'I have to write an interesting text about myself which magnifies HR people'
                        ]}
                        typeSpeed={50}
                 />
                    </p>
                </div>
                
            </div>
        </Layout>
        
    )
}

export default AboutPage;