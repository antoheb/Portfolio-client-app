import React, { Fragment, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { HomePage } from '../../features/user/HomePage'
import { LoginForm } from '../../features/login/LoginForm'
import { AboutMe } from '../../features/user/AboutMe'
import { ExperiencePage } from '../../features/user/ExperiencePage'
import { ProjectPage } from '../../features/user/ProjectPage'
import { ContactPage } from '../../features/user/ContactPage';

const UserLayout: React.FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/experience" component={ExperiencePage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Fragment>
  )
}

export default observer(UserLayout)
