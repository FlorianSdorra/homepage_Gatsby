import React from "react";
import {Link} from "gatsby";
import CircleType from "circletype";
import Typed from 'react-typed';

import Layout from "../components/layout";
import Head from "../components/head";

import indexStyles from "./index.module.scss";

import me from "./assets/images/me.png"

class IndexPage extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      width: 0, 
      height: 0,
      isTop: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.doTheCircle = this.doTheCircle.bind(this);
  }

  componentDidMount(){
    this.updateWindowDimensions();

    this.doTheCircle();
  }
  
  doTheCircle(){

  }
    
  updateWindowDimensions(){
    return this.setState({ width:window.innerWidth, height:window.innerHeight});
  }
  

  render(){
    
    return (
      
      <Layout>
        <Head title="Home"/>
        <div className={indexStyles.bg}>
        </div>
        <div className={indexStyles.container}>
          <div className={indexStyles.introWrap}>
            <div className={indexStyles.intro}>
            <h1>
            <Typed
                    strings={[
                      'Hey, I am Flo',
                      'I salute you dear visitor of my page :)',
                      'Ladies and Gents',
                      'Welcome dear honorable members of the internet.'
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={900}
                />

                {/* <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed> */}
            </h1>
            {/* <p>Need one? <Link to="/contact">Contact me.</Link></p> */}
            </div>
          </div>
          <div className={indexStyles.content}>
              <div className={`${indexStyles.inner} ${indexStyles.descr} ${indexStyles.grow}`}>
                <h2>I am a Full Stack Developer with a passion for design and innovative technologies from Berlin, Germany.</h2>
              </div>
              <div className={`${indexStyles.inner} ${indexStyles.descr} ${indexStyles.shrink}`}>
                <img className={indexStyles.me} src={me}/>
              </div>
          </div>
        </div>
      </Layout>
    )
}
  
}

export default IndexPage
