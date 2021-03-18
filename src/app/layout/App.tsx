import { observer } from 'mobx-react'
import { Container } from 'react-bootstrap'
import UserLayout from './UserLayout'

const App: React.FC = () => {
  return (
    <Container>
      <UserLayout />
    </Container>
  )
}

export default observer(App)
