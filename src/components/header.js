import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import styles from "../styles/global.css"


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
   <div className="row-flex">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active navbarlink" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Page</Link>
        </li>        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Portfolio</Link>
        </li>        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Blog</Link>
        </li>        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Shop</Link>
        </li>        
      </ul>
    </div>
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
