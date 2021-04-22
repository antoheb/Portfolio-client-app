import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { Menu, Header, Button, Icon, Image, Dropdown } from 'semantic-ui-react'
import { history } from '../..'
import { RootStoreContext } from '../../app/stores/rootStore'

const AdminNavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { logout, user } = rootStore.userStore

  return (
    <Menu inverted fixed="left" vertical size="large" icon="labeled">
      <Menu.Item style={{ marginBottom: '2em' }}>
        <Image
          centered
          src="https://media-exp1.licdn.com/dms/image/C5603AQEnyLLAR_L5Bw/profile-displayphoto-shrink_200_200/0/1542653790778?e=1623283200&v=beta&t=wQJDlO74zSOb0fZmQnV5hcaQR98zpHEkyOz-q6rfkLw"
          size="small"
          circular
          style={{ marginBottom: '2em' }}
        />
        {user?.firstName + ' ' + user?.lastName}
        <Dropdown>
          <Dropdown.Menu direction="left">
            <Dropdown.Item onClick={() => logout()} text="Log out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        name="Personal Information"
        icon="user circle"
        onClick={() => history.push('/')}
      ></Menu.Item>
      <Menu.Item
        name="My Experiences"
        icon="line graph"
        onClick={() => history.push('/experience')}
      />
      <Menu.Item
        name="My Projects"
        icon="computer"
        onClick={() => history.push('/project')}
      />
      <Menu.Item
        name="My Education"
        icon="graduation cap"
        onClick={() => history.push('/education')}
      />
      <Menu.Item
        name="Contact Page"
        icon="address book"
        onClick={() => history.push('/contact')}
      />
    </Menu>
  )
}

export default observer(AdminNavBar)
