import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import footerStyles from './footer.module.scss';

import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {

    const data = useStaticQuery(graphql`
          query{
              site{
                  siteMetadata{
                      author,
                      github,
                      linkedin
                  }
              }
          }  
    `)

    const footer = data.site.siteMetadata;

    const author = footer.author;
    const git = footer.github;
    const linked = footer.linkedin;

    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.copyRight}>© {author} 2020</p>
            <div className={footerStyles.links}>
                <div className={footerStyles.linkCont}><Link to= {git} target="blank"><GoMarkGithub className={footerStyles.link}/></Link></div>
                <div className={footerStyles.linkCont}><Link to ={linked} target="blank"><AiFillLinkedin className={footerStyles.link}/></Link></div>
            </div>
        </footer>
    )
}

export default Footer;