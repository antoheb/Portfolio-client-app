import React, { useContext, useEffect, useState } from 'react'
import { Card, Header, Icon } from 'semantic-ui-react'
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
        style={{ marginLeft: '10em', marginRight: '10em', marginTop: '2em' }}
      >
        {projectList.map((project) => (
          <Card color="orange">
            <Card.Content>
              <Card.Header>
                {project.name}
                {project.gitHubLink && (
                  <a href={project.gitHubLink} style={{ color: 'black' }}>
                    <Icon link name="github" style={{ float: 'right' }} />
                  </a>
                )}
              </Card.Header>
            </Card.Content>
            <Card.Content
              style={{ minHeight: '150px' }}
              description={project.description}
            />
            <Card.Content extra>
              <div style={{ minHeight: '120px' }}>
                <Header as="h4">Project Language/Framework/etc</Header>
                <ul>
                  {project.technologies.split(',').map((technology) => (
                    <li>{technology}</li>
                  ))}
                </ul>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </section>
  )
}
