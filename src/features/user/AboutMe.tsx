import React, {useContext } from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'
import NavBar from '../nav/NavBar'

export const AboutMe: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { user } = rootStore.userStore

  return (
    <section id="about" style={{ backgroundColor: '#282828' }}>
      <NavBar />
      <Grid style={{ paddingTop: '8em', paddingBottom:'8em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Image
              centered
              src="https://media-exp1.licdn.com/dms/image/C5603AQEnyLLAR_L5Bw/profile-displayphoto-shrink_200_200/0/1542653790778?e=1623283200&v=beta&t=wQJDlO74zSOb0fZmQnV5hcaQR98zpHEkyOz-q6rfkLw"
              size="small"
              circular
            />
          </Grid.Column>
          <Grid.Column width="10">
            <Header as="h3" inverted>
              ABOUT ME
            </Header>
            <div style={{ color: '#696969' }}>{user?.aboutMe}</div>
            <Header as="h3" inverted>
              CONTACT DETAILS
            </Header>
            <div style={{ color: '#696969' }}>
              {user?.firstName + ' ' + user?.lastName}
              <br />
              {user?.street}
              <br />
              {user?.city + ", " + user?.state + " " + user?.zip}
              <br />
              {user?.phoneNumber}
              <br />
              {user?.email}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
