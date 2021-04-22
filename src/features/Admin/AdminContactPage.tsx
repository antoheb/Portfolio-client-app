import React, { Fragment } from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'

export const AdminContactPage: React.FC = () => {
  return (
    <Fragment>
      <Grid>
        <Header as="h1">
          <Icon name="address book" color="blue" />
          <Header.Content>
            Contact Information
            <Header.Subheader>Manage your contact</Header.Subheader>
          </Header.Content>
        </Header>
      </Grid>
    </Fragment>
  )
}
