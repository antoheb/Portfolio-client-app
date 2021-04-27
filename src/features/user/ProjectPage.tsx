import React, { useContext } from 'react'
import { Card, Header } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore'

export const ProjectPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { projectList } = rootStore.projectStore

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
      <Header as="h2" textAlign="center">
        My Projects
      </Header>
      <Card.Group
        itemsPerRow={3}
        style={{ marginLeft: '14em', marginRight: '14em', marginTop: '2em' }}
      >
        {projectList.map((project) => (
          <Card
            header={project.name}
            meta={project.gitHubLink}
            description={project.description}
          />
        ))}
      </Card.Group>
    </section>
  )
}
