import { observer } from 'mobx-react'
import React from 'react'
import { Menu } from 'semantic-ui-react'

const NavBar: React.FC = () => {
  return (
    <Menu inverted size="large">
      <Menu.Item>
        <a href="#home">HOME</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#about">ABOUT</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#experience">EXPERIENCE</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#project">PROJECTS</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#contact">CONTACT</a>
      </Menu.Item>
    </Menu>
  )
}

export default observer(NavBar)
