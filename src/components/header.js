import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import headerStyles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faBars
  } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {navListIsActive: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          navListIsActive: !state.navListIsActive
        }));
      }

    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title,
    //                 author
    //             }
    //         }
    //     }
    // `)
    // const author = data.site.siteMetadata.author;


   render() { 
       console.log(this.state);
       console.log(this.props);
    return (
        this.state.navListIsActive ? (
            <header className={headerStyles.header}>
            <div className={headerStyles.inner}>
                <span className={headerStyles.navbarToggle} onClick={this.handleClick} >
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </span>
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
                    <ul className={headerStyles.navList} className={headerStyles.navListActive} >
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> </li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        )
        :
        (
            <header className={headerStyles.header}>
            <div className={headerStyles.inner}>
                <span className={headerStyles.navbarToggle} onClick={this.handleClick} >
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </span>
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
                    <ul className={headerStyles.navList} >
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> </li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        )

        
    )
   }
}

export default Header;