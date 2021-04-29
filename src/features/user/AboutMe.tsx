import React, { useContext } from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'

export const AboutMe: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { user } = rootStore.userStore

  return (
    <section id="about" style={{ backgroundColor: '#282828' }}>
      <Grid style={{ paddingTop: '5em', paddingBottom: '5em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Image centered src={user?.pictureUrl} size="small" circular />
          </Grid.Column>
          <Grid.Column width="10">
            <Header as="h3" inverted style={{color:'lightsalmon'}}>
              ABOUT ME
            </Header>
            <div style={{ color: '#696969' }}>{user?.aboutMe}</div>
            <div style={{ color: '#696969', marginTop: '3em' }}>
              <Header as="h3" inverted style={{color:'lightsalmon'}}>
                CONTACT DETAILS
              </Header>
              {user?.firstName + ' ' + user?.lastName}
              <br />
              {user?.street}
              <br />
              {user?.city + ', ' + user?.state + ' ' + user?.zip}
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
