import { observer } from 'mobx-react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import { AdminHomePage } from '../../features/Admin/AdminHomePage'
import { SkillPage } from '../../features/Admin/Skill/SkillPage'
import EducationPage from '../../features/Admin/Education/EducationPage'
import ExperiencePage from '../../features/Admin/Experience/ExperiencePage'
import ProjectPage from '../../features/Admin/Project/ProjectPage'
import AdminNavBar from '../../features/nav/AdminNavBar'

const AdminLayout: React.FC = () => {
  return (
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <AdminNavBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <Container style={{ marginTop: '4em' }}>
              <Switch>
                <Route exact path="/" component={AdminHomePage} />
                <Route exact path="/project" component={ProjectPage} />
                <Route exact path="/project/:id" component={ProjectPage} />
                <Route exact path="/experience" component={ExperiencePage} />
                <Route
                  exact
                  path="/experience/:id"
                  component={ExperiencePage}
                />
                <Route exact path="/education" component={EducationPage} />
                <Route exact path="/education/:id" component={EducationPage} />
                <Route exact path="/skill" component={SkillPage} />
                <Route exact path="/skill/:id" component={SkillPage} />
              </Switch>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

export default observer(AdminLayout)
