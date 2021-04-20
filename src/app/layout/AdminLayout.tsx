import { observer } from 'mobx-react'
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import { AdminHomePage } from '../../features/Admin/AdminHomePage'
import ProjectPage from '../../features/Admin/Project/ProjectPage'
import AdminNavBar from '../../features/nav/AdminNavBar'

const AdminLayout: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <AdminNavBar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Container style={{ marginTop: '4em' }}>
              <Switch>
                <Route exact path="/" component={AdminHomePage} />
                <Route exact path="/project" component={ProjectPage} />
                <Route exact path="/project/:id" component={ProjectPage} />
              </Switch>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
    </Container>
  )
}

export default observer(AdminLayout)
