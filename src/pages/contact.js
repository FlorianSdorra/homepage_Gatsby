import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Typed from 'react-typed';

import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';

import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const ContactPage = () => {

    const data = useStaticQuery(graphql`
          query{
              site{
                  siteMetadata{
                      linkedin,
                      email,
                      phone
                  }
              }
          }  
    `)

    return (
        <Layout>
            <Head title="Contact"/>
            <div className={contactStyles.container}>
                <div className={contactStyles.intro}>
                    <h1>Contact</h1>
                    <p className={contactStyles.inner}>
                    <Typed
                    strings={[
                      `Get in touch with me.`
                    ]}
                    typeSpeed={50}
                 />
                        </p>
                </div>
                <div className={contactStyles.contactBox}>
                    <div className ={contactStyles.contactBoxBg}></div>
                    <Link to={data.site.siteMetadata.linkedin} target="blank">
                        <div className={contactStyles.linkBox}>
                            <div className={contactStyles.linkBoxBg}></div>   
                            <AiOutlineLinkedin className={contactStyles.icon}></AiOutlineLinkedin>
                        </div>
                    </Link>
                    <a href={data.site.siteMetadata.email} target="blank">
                        <div className={contactStyles.linkBox}>
                            <div className={contactStyles.linkBoxBg}></div>      
                            <AiOutlineMail className={contactStyles.icon}></AiOutlineMail>
                        </div>
                    </a>
                    <div  className={`${contactStyles.linkBox} ${contactStyles.phoneBox}`} target="blank">
                        <div className={contactStyles.linkBoxBg}></div>
                        <AiOutlinePhone className={contactStyles.icon}></AiOutlinePhone>
                        <p>+491575960837</p>
                    </div>
                </div>  
            </div>
        </Layout>
    )
}

export default ContactPage;