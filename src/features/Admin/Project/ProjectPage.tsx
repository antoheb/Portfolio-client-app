import { observer } from 'mobx-react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { IProjectFormValues } from '../../../app/models/project'
import { RootStoreContext } from '../../../app/stores/rootStore'
import AddProjectForm from './AddProjectForm'
import EditProjectForm from './EditProjectForm'
import ProjectList from './ProjectList'

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {}

const ProjectPage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext)
  const { loadProject, loadProjectList, projectList } = rootStore.projectStore
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState<IProjectFormValues>()

  useEffect(() => {
    loadProjectList().then(() => setLoading(false))
  }, [loadProjectList])

  useEffect(() => {
    if (match.params.id) {
      loadProject(match.params.id)
        .then((proj) => setProject(proj))
        .finally(() => setLoading(false))
    }
  }, [loadProject, setProject, match.params.id, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <div>
        <Header as="h1">
          <Icon name="computer" color="blue" />
          <Header.Content>
            My Projects
            <Header.Subheader>Projects accomplish during my DEC</Header.Subheader>
          </Header.Content>
        </Header>
        <ProjectList projectList={projectList!} />
        {match.params.id ? (
          <EditProjectForm project={project!} id={match.params.id} />
        ) : (
          <AddProjectForm />
        )}
      </div>
    </Fragment>
  )
}

export default observer(ProjectPage)
