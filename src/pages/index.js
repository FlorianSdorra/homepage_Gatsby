import React from "react";
import {Link} from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Bonjourno.</h1>
      <h2>I'm Flo,  a full stack developer living in beautiful Berlin.</h2>
      <p>Need a developer? <a href="/contact">Contact me.</a></p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default IndexPage
