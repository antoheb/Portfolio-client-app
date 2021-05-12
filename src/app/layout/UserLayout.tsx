import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { LoginForm } from '../../features/login/LoginForm'
import { Portfolio } from '../../features/user/Portfolio'

const UserLayout: React.FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/admin/secret/login" component={LoginForm} />
      </Switch>
    </Fragment>
  )
}

export default observer(UserLayout)
