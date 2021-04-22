import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { Button, Header, Segment, Table } from 'semantic-ui-react'
import { IEducationFormValues } from '../../../app/models/education'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { history } from '../../../index'

interface IProps {
  educationList: IEducationFormValues[]
}

const EducationList: React.FC<IProps> = ({ educationList }) => {
  const rootStore = useContext(RootStoreContext)
  const { deleteEducation } = rootStore.educationStore

  return (
    <Segment style={{marginTop:'4em'}}>
      <Header as="h3">Education Board</Header>
      <Table celled selectable>
        <Table.Header>
          <Table.HeaderCell>School Name</Table.HeaderCell>
          <Table.HeaderCell>School Address</Table.HeaderCell>
          <Table.HeaderCell>Years</Table.HeaderCell>
          <Table.HeaderCell>Program Enrolled</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {educationList.map((edu) => (
            <Table.Row>
              <Table.Cell>{edu.schoolName}</Table.Cell>
              <Table.Cell>{edu.schoolAddress}</Table.Cell>
              <Table.Cell>{edu.years}</Table.Cell>
              <Table.Cell>{edu.program}</Table.Cell>
              <Table.Cell>{edu.description}</Table.Cell>
              <Table.Cell width='2'>
                <Button
                  icon="edit"
                  onClick={() => history.push(`/education/${edu.id}`)}
                />
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => deleteEducation(edu.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default observer(EducationList)
