import React from "react";
import {Link} from "gatsby";
import CircleType from "circletype";

import Layout from "../components/layout";
import Head from "../components/head";

import indexStyles from "./index.module.scss"

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
          <div className={indexStyles.circle}></div>
        </div>
        <div className={indexStyles.container}>
          <div className={indexStyles.intro}>
            <h1 className={indexStyles.introHead}>Web Developer</h1>
            <p>Need one? <Link to="/contact">Contact me.</Link></p>
          </div>
          <div className={indexStyles.content}>
            <div className={indexStyles.inner}>
              <div className={indexStyles.heading}>
                <h2>Florian Sdorra is a Full Stack Developer with a passion for design and innovative technologies from Berlin, Germany.</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}
  
}

export default IndexPage
