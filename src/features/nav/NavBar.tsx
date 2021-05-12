import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-scroll'
import './navCss.css'

const NavBar: React.FC = () => {
  return (
    <nav id="nav-wrap">
      <div style={{ marginLeft: '30%' }}>
        <ul id="nav" className="nav">
          <li>
            <Link to="home" spy={true} smooth={true} duration={1500}>
              <a href=" ">HOME</a>
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1500}>
              <a href=" ">ABOUT</a>
            </Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} duration={1500}>
              <a href=" ">EXPERIENCE</a>
            </Link>
          </li>
          <li>
            <Link to="project" spy={true} smooth={true} duration={1500}>
              <a href=" ">PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1500}>
              <a href=" ">CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default observer(NavBar)
