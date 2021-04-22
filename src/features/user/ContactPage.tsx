import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'
import NavBar from '../nav/NavBar'

export const ContactPage: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <Header
        style={{ textAlign: 'center', textDecoration: 'underline' }}
        as="h1"
      >
        CONTACT
      </Header>
    </Fragment>
  )
}
