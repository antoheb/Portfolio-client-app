import React, { Fragment, useContext } from 'react'
import { Image, Card, Header, Icon, Grid } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'
import NavBar from '../nav/NavBar'

export const AboutMe: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { user } = rootStore.userStore

  return (
    <Fragment>
      <NavBar />
      <Header
        style={{ textAlign: 'center', textDecoration: 'underline' }}
        as="h1"
      >
        ABOUT
      </Header>
      <Grid style={{ marginTop: '2em' }}>
        <Grid.Row>
          <Grid.Column width={7}>
            <Card style={{ marginLeft: '10em', width: '390px' }} color="orange">
              <Image
                src="https://media-exp1.licdn.com/dms/image/C5603AQEnyLLAR_L5Bw/profile-displayphoto-shrink_200_200/0/1542653790778?e=1623283200&v=beta&t=wQJDlO74zSOb0fZmQnV5hcaQR98zpHEkyOz-q6rfkLw"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  {user?.firstName + ' ' + user?.lastName}
                </Card.Header>
                <Card.Meta>
                  <span className="date">{user?.dateOfBirth}</span>
                </Card.Meta>
                <Card.Description>
                  Antoine is a student at Champlain College in Computer Science
                </Card.Description>
              </Card.Content>
              <Card.Content extra>{user?.aboutMe}</Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={9}>
            <Grid>
              <Grid.Row style={{ marginBottom: '8em' }}>
                <Grid.Column>
                  <Icon name="react" size="huge"></Icon>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: '8em' }}>
                <Grid.Column>
                  <Icon name="microsoft" size="huge"></Icon>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ marginBottom: '8em' }}>
                <Grid.Column>
                  <Icon name="database" size="huge"></Icon>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Icon name="php" size="huge"></Icon>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}
