import React, { useContext, useEffect, useState } from 'react'
import { Card, Header } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { RootStoreContext } from '../../app/stores/rootStore'

export const ProjectPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { loadProjectList, projectList } = rootStore.projectStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProjectList().then(() => setLoading(false))
  }, [loadProjectList, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <section
      id="project"
      style={{
        backgroundColor: '#F8F8F8',
        paddingTop: '5em',
        paddingBottom: '5em',
        minHeight: '600px',
      }}
    >
      <Header
        as="h2"
        textAlign="center"
        style={{ textDecoration: 'underline', textDecorationColor: 'orange' }}
      >
        MY PROJECTS
      </Header>
      <Card.Group
        itemsPerRow={3}
        style={{ marginLeft: '14em', marginRight: '14em', marginTop: '2em' }}
      >
        {projectList.map((project) => (
          <Card
            color="orange"
            header={project.name}
            meta={project.gitHubLink}
            description={project.description}
          />
        ))}
      </Card.Group>
    </section>
  )
}
