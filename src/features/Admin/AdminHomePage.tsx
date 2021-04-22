import React, { Fragment } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

export const AdminHomePage: React.FC = () => {
  return (
    <Fragment>
      <Grid>
        <Header as="h1">
          <Icon name="user" color='blue' />
          <Header.Content>
            Personal information
            <Header.Subheader>Manage the information about yourself</Header.Subheader>
          </Header.Content>
        </Header>
      </Grid>
    </Fragment>
  )
}
