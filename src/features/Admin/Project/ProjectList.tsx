import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { Button, Header, Segment, Table } from 'semantic-ui-react'
import { IProjectFormValues } from '../../../app/models/project'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { history } from '../../../index'

interface IProps {
  projectList: IProjectFormValues[]
}

const ProjectList: React.FC<IProps> = ({ projectList }) => {
  const rootStore = useContext(RootStoreContext)
  const { deleteProject } = rootStore.projectStore

  return (
    <Segment style={{marginTop:'4em'}}>
      <Header as="h3">Projects Board</Header>
      <Table celled selectable>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>GitHubLink</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {projectList.map((proj) => (
            <Table.Row>
              <Table.Cell>{proj.name}</Table.Cell>
              <Table.Cell>{proj.description}</Table.Cell>
              <Table.Cell>{proj.gitHubLink}</Table.Cell>
              <Table.Cell>
                <Button
                  icon="edit"
                  onClick={() => history.push(`/project/${proj.id}`)}
                />
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => deleteProject(proj.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default observer(ProjectList)
