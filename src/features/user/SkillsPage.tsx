import React, { useContext, useEffect, useState } from 'react'
import { Grid, Header, Progress } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'

export const SkillsPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { loadSkillList, skillsList } = rootStore.skillStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSkillList().then(() => setLoading(false))
  }, [loadSkillList, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <section id="skills">
      <Grid style={{ paddingTop: '5em', paddingBottom: '3em' }}>
        <Grid.Row>
          <Grid.Column width="6">
            <Header
              as="h2"
              textAlign="center"
              style={{ textDecoration: 'underline', textDecorationColor:'orange' }}
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
