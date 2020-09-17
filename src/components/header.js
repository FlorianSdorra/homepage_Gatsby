import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import headerStyles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faBars
  } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                        navListIsActive: false,
                        status: "top"
                    };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(state => ({
          navListIsActive: !state.navListIsActive
        }));
      }

      componentDidMount() {
        this.listener = document.addEventListener("scroll", () => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 1) {
            if (this.state.status !== "scroll") {
              this.setState({ status: "scroll" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
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


    // HEADER variante wenn navlist inActive = className={this.state.status==="top"? headerStyles.header:headerStyles.headerTwo}

   render() { 
       console.log(this.state);
       console.log(this.props);
    return (
        this.state.navListIsActive ? (
            <header className={headerStyles.header} className={headerStyles.headerTwo}>
            <div className={headerStyles.inner}>
                <div className={headerStyles.navbarToggleCont}>
                    <span className={headerStyles.navbarToggle} onClick={this.handleClick} >
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </span>
                </div>
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
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/work">Work</Link></li>
                        {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li> */}
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        )
        :
        (
            <header className={headerStyles.header} >
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
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/work">Work</Link></li>
                        {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li> */}
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