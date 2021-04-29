import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-scroll'
import './navCss.css'

const NavBar: React.FC = () => {
  return (
    <nav id="nav-wrap">
      <div style={{marginLeft:'30%'}}>
      <ul id="nav" className="nav">
        <li className="current">
          <a href="#home">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              HOME
            </Link>
          </a>
        </li>
        <li>
          <a href="#about">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              ABOUT
            </Link>
          </a>
        </li>
        <li>
          <a href="#experience">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={1000}
            >
              EXPERIENCE
            </Link>
          </a>
        </li>
        <li>
          <a href="#project">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={1000}
            >
              PROJECTS
            </Link>
          </a>
        </li>
        <li>
          <a href="#contact">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              CONTACT
            </Link>
          </a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default observer(NavBar)
