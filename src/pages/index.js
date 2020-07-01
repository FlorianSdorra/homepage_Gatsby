import React from "react";
import {Link} from "gatsby";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <h1>Bonjourno.</h1>
      <h2>I'm Flo,  a full stack developer living in beautiful Berlin.</h2>
      <p>Need a developer? <a href="/contact">Contact me.</a></p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage
