import React, { Fragment, useContext } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'

export const ExperiencePage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { experienceList } = rootStore.experienceStore

  return (
    <section id="experience">
      <Grid style={{ paddingTop: '5em', paddingBottom: '2em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h3"
              textAlign="center"
              style={{ textDecoration: 'underline' }}
            >
              WORK
            </Header>
          </Grid.Column>
          <Grid.Column width="10">
            {experienceList.map((experience) => (
              <div style={{ marginBottom: '3em' }}>
                <div>
                  <Header as="h1">{experience.employer}</Header>
                </div>
                <div style={{ fontStyle: 'italic' }}>
                  {experience.title + '  -  ' + 'ajouter les annees'}
                </div>
                <br />
                <div>{experience.description}</div>
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
