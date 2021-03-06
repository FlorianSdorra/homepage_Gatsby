import React from 'react';
import {Link, useStaticQuery } from 'gatsby';
import Typed from 'react-typed';

import Layout from '../components/layout';
import Head from '../components/head';
import contactStyles from './contact.module.scss';
import Fade from 'react-reveal/Fade';

import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineArrowDown } from 'react-icons/ai';
import {CgArrowLongDownR} from 'react-icons/cg';

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
                    <div className={contactStyles.introEyes}>
                        <div className={contactStyles.eyes}></div>
                    </div>
                    <div className={contactStyles.introText}>
                        <h1 className={contactStyles.introTextHead}>Contact</h1>
                        <p>If you want to talk, please get in touch with me.</p>
                        <CgArrowLongDownR className={contactStyles.arrow}/>
                    </div>
                </div>
                <div className={contactStyles.contactBox}>
                    <div className={contactStyles.contacts}>
                        <h3>You can reach me via:</h3>
                        <div className={contactStyles.icons}>
                            <a href="mailto:fsd114@posteo.de"><AiOutlineMail className={contactStyles.icon}></AiOutlineMail></a>
                            <Link to={data.site.siteMetadata.linkedin} target="blank"><AiOutlineLinkedin className={contactStyles.icon}></AiOutlineLinkedin></Link>
                            <p className={contactStyles.phone}><AiOutlinePhone className={contactStyles.icon}></AiOutlinePhone>:
                            +4915759608379</p>
                        </div>
                    </div>
                </div> 
                <div className={contactStyles.outroEyes}></div>
            </div>
        </Layout>
    )
}

export default ContactPage;