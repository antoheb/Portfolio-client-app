import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
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
          src={user?.pictureUrl}
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
        name="My Skills"
        icon="idea"
        onClick={() => history.push('/skill')}
      />
    </Menu>
  )
}

export default observer(AdminNavBar)
