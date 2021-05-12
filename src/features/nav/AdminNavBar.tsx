import { observer } from 'mobx-react'
import React, { useContext, useState } from 'react'
import { Menu, Image, Dropdown, Dimmer } from 'semantic-ui-react'
import { history } from '../..'
import { RootStoreContext } from '../../app/stores/rootStore'
import { AddPhotoForm } from '../Admin/photo/AddPhotoForm'

const AdminNavBar: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { logout, user } = rootStore.userStore
  const { openModal } = rootStore.modalStore
  const [active, setActive] = useState<boolean>()
  const content = (
    <Menu.Item
      name="Change Profile Picture"
      onClick={() => openModal(<AddPhotoForm />)}
    />
  )

  return (
    <Menu inverted fixed="left" vertical size="large" icon="labeled">
      <Menu.Item style={{ marginBottom: '2em' }}>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          centered
          src={`data:image/jpeg;base64,${user?.photoUrl}`}
          size="small"
          circular
          style={{ marginBottom: '2em' }}
        />
        <br />
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
