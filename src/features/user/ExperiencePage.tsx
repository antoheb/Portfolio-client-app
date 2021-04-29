import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'

export const ExperiencePage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { loadExperienceList, experienceList } = rootStore.experienceStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadExperienceList().then(() => setLoading(false))
  }, [loadExperienceList, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <section id="experience">
      <Grid style={{ paddingTop: '5em', paddingBottom: '2em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h2"
              textAlign="center"
              style={{ textDecoration: 'underline', textDecorationColor:'orange' }}
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
