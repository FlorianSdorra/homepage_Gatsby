import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={indexStyles.bg}></div>
      <div className={indexStyles.container}>
        <div className={indexStyles.intro}>
          <h1>WEB DEVELOPER</h1>
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

export default IndexPage
