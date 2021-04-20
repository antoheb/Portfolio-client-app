import { observer } from 'mobx-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Button } from 'semantic-ui-react'
import { history } from '../../index'

const NavBar: React.FC = () => {
  return (
    <Menu inverted fixed="left" vertical size="large">
      <Menu.Item>
        <Header as="h1" color="blue">
          Hey, I'm Antoine
        </Header>
      </Menu.Item>
      <Menu.Item>
        <Button icon="user circle" size='massive'></Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon="line graph" size="massive"></Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon="computer" size="massive"></Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon="graduation cap" size="massive"></Button>
      </Menu.Item>
      <Menu.Item>
        <Button icon="address card outline" size="massive"></Button>
      </Menu.Item>
    </Menu>
  )
}

export default observer(NavBar)
