import React, { useContext } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'

export const EducationPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { educationList } = rootStore.educationStore

  return (
    <section id="education">
      <Grid style={{ paddingTop: '5em', paddingBottom: '2em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h3"
              textAlign="center"
              style={{ textDecoration: 'underline' }}
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
