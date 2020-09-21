import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import Typed from 'react-typed';

import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';

import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineArrowDown } from 'react-icons/ai';
import {CgArrowLongDownR} from 'react-icons/cg'

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
                    <div className={contactStyles.introEyes}></div>
                    <div className={contactStyles.introText}>
                        <h1>Contact</h1>
                        <p>
                        <Typed
                            strings={[`If you want to talk, please get in touch with me.`]}
                    typeSpeed={50}
                 />
                        </p>
                        <CgArrowLongDownR className={contactStyles.arrow}/>
                    </div>
                </div>
                <div className={contactStyles.contactBox}>
                    <div className={contactStyles.contacts}>
                        <h3>You can <br/> reach me via:</h3>
                        <div className={contactStyles.icons}>
                            <AiOutlineMail className={contactStyles.icon}></AiOutlineMail>
                            <AiOutlineLinkedin className={contactStyles.icon}></AiOutlineLinkedin>
                            <p className={contactStyles.phone}><AiOutlinePhone className={contactStyles.icon}></AiOutlinePhone>:
                            +4915759608379</p>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </Layout>
    )
}

export default ContactPage;