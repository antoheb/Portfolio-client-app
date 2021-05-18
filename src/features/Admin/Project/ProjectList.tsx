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
    <Segment style={{ marginTop: '4em' }}>
      <Header as="h3">Projects Board</Header>
      <Table celled selectable>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>GitHub Link</Table.HeaderCell>
          <Table.HeaderCell>Project Link</Table.HeaderCell>
          <Table.HeaderCell>Technologies</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {projectList.map((proj) => (
            <Table.Row>
              <Table.Cell width="2">{proj.name}</Table.Cell>
              <Table.Cell width='6'>{proj.description}</Table.Cell>
              <Table.Cell>{proj.gitHubLink}</Table.Cell>
              <Table.Cell>{proj.projectLink}</Table.Cell>
              <Table.Cell>
                {
                  <ul>
                    {proj.technologies.split(',').map((technology) => (
                      <li>{technology}</li>
                    ))}
                  </ul>
                }
              </Table.Cell>
              <Table.Cell width={2}>
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
