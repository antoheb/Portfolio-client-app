import { observer } from 'mobx-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Button } from 'semantic-ui-react'
import { history } from '../../index'

const NavBar: React.FC = () => {
  return (
    <Menu inverted size="large" >
      <Menu.Item onClick={() => history.push('/')}>HOME</Menu.Item>
      <Menu.Item onClick={() => history.push('/about')}>ABOUT</Menu.Item>
      <Menu.Item onClick={() => history.push('/experience')}>EXPERIENCE</Menu.Item>
      <Menu.Item onClick={() => history.push('/project')}>PROJECTS</Menu.Item>
      <Menu.Item onClick={() => history.push('/contact')}>CONTACT</Menu.Item>
    </Menu>
  )
}

export default observer(NavBar)
