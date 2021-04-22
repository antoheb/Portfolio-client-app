import React, { Fragment, useContext } from 'react'
import { Header } from 'semantic-ui-react'
import NavBar from '../nav/NavBar'

export const ExperiencePage: React.FC = () => {
  return (
    <Fragment>
      <NavBar />
      <Header
        style={{ textAlign: 'center', textDecoration: 'underline' }}
        as="h1"
      >
        EXPERIENCES
      </Header>
    </Fragment>
  )
}
