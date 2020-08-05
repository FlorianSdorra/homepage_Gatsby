import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {

    const data = useStaticQuery(graphql`
          query{
              site{
                  siteMetadata{
                      author
                  }
              }
          }  
    `)

    const author = data.site.siteMetadata.author;

    return (
        <footer className={footerStyles.footer}>
            <p>Created by {author}, Copyright 2020</p>
        </footer>
    )
}

export default Footer;