import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import NavBar from '../../features/nav/NavBar'
import { Container } from 'react-bootstrap'
import { HomePage } from '../../features/home/HomePage'
import { LoginForm } from '../../features/login/LoginForm'

const UserLayout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Container>
  )
}

export default observer(UserLayout)
