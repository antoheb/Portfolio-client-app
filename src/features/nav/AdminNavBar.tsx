import { observer } from "mobx-react"
import React from "react"
import { Menu, Header, Button } from "semantic-ui-react"

const AdminNavBar: React.FC = () => {
    return (
      <Menu inverted fixed="left" vertical size="large">
        <Menu.Item>
          <Header as="h1" color="blue">
            Admin DashBoard
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
  
  export default observer(AdminNavBar)