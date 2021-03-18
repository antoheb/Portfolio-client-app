import React from 'react'
import { Container } from 'react-bootstrap'
import { Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const UserLayout: React.FC = () => {
  return (
    <Container>
      <Switch></Switch>
    </Container>
  )
}

export default observer(UserLayout)
