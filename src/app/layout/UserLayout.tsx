import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import NavBar from '../../features/nav/NavBar'
import { Container } from 'react-bootstrap'

const UserLayout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Switch></Switch>
    </Container>
  )
}

export default observer(UserLayout)
