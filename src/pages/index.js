import React from "react";
import {Link} from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Bonjourno.</h1>
      <h2>I'm Flo,  a full stack developer living in beautiful Berlin.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
