import { observer } from 'mobx-react'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Switch } from 'react-router-dom'

const AdminLayout: React.FC = () => {
  return (
    <Container>
      <Switch></Switch>
    </Container>
  )
}

export default observer(AdminLayout)
