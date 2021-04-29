import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { LoginForm } from '../../features/login/LoginForm'
import { Portfolio } from '../../features/user/Portfolio'
import NavBar from '../../features/nav/NavBar'

const UserLayout: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Fragment>
  )
}

export default observer(UserLayout)
