import React, { useContext, useEffect, useState } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'

export const EducationPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { loadEducationList, educationList } = rootStore.educationStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadEducationList().then(() => setLoading(false))
  }, [loadEducationList, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <section id="education">
      <Grid style={{ paddingTop: '5em', paddingBottom: '2em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h2"
              textAlign="center"
              style={{ textDecoration: 'underline', textDecorationColor:'orange'}}
            >
              EDUCATION
            </Header>
          </Grid.Column>
          <Grid.Column width="10">
            {educationList.map((education) => (
              <div style={{ marginBottom: '3em' }}>
                <div>
                  <Header as="h1">{education.schoolName}</Header>
                </div>
                <div style={{ fontStyle: 'italic' }}>
                  {education.program + '  -  ' + education.years}
                </div>
                <br />
                <div>{education.description}</div>
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
