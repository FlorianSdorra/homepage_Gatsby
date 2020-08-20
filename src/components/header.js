import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
        }
    `)

    // const author = data.site.siteMetadata.author;

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.inner}>
                <h1 className={headerStyles.headTitle}>
                    <Link  className={headerStyles.title}to="/">
                            <div className={headerStyles.florian}>
                            <div>F</div><div className={headerStyles.logo}>LORIAN</div>
                            </div>
                            <div className={headerStyles.florian}>
                                <div>S</div><div className={headerStyles.logo}>DORRA</div>
                            </div>
                    </Link>
                 </h1>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> </li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;