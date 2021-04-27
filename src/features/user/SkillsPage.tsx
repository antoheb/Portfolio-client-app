import React, { useContext } from 'react'
import { Grid, Header, Progress } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'

export const SkillsPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { skillsList } = rootStore.skillStore

  return (
    <section id="skills">
      <Grid style={{ paddingTop: '5em', paddingBottom: '3em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h3"
              textAlign="center"
              style={{ textDecoration: 'underline' }}
            >
              SKILLS
            </Header>
          </Grid.Column>
          <Grid.Column width="7">
            {skillsList.map((skill) => (
              <div>
                <Header as="h3">{skill.name}</Header>
                <Progress
                  value={skill.progress}
                  total="100"
                  progress="percent"
                  size="big"
                  color="black"
                />
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}
