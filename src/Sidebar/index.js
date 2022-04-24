import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import Logo from "../assets/images/logo-b.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons"
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#fadadd" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/about"
        className="about-link"
      >
        <FontAwesomeIcon icon={faUser} color="#fadadd" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#fadadd" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar