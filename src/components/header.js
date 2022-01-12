import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import styles from "../styles/header.module.css"


const Header = ({ siteTitle, children }) => (
  <div class="container-fluid">
  <div class="row">
    <div class="col">
    <StaticImage
      src="../images/logo-light-img.png"     
      alt="A Gatsby astronaut"      
    />
    </div>
    <div class="col">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>        
      </ul>
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
