import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={indexStyles.container}>
        <div className={indexStyles.center}>
          <h1>WEB DEVELOPER</h1>
          <p>Need one? <Link to="/contact">Contact me.</Link></p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
