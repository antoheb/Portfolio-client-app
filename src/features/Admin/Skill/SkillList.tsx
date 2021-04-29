import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { Segment, Header, Table, Button } from 'semantic-ui-react'
import { history } from '../../..'
import { ISkillFormValues } from '../../../app/models/skill'
import { RootStoreContext } from '../../../app/stores/rootStore'

interface IProps {
  skillList: ISkillFormValues[]
}

const SkillList: React.FC<IProps> = ({ skillList }) => {
  const rootStore = useContext(RootStoreContext)
  const { deleteSkill } = rootStore.skillStore

  return (
    <Segment style={{ marginTop: '4em' }}>
      <Header as="h3">Skills Board</Header>
      <Table celled selectable>
        <Table.Header>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Progress</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {skillList.map((skill) => (
            <Table.Row>
              <Table.Cell>{skill.name}</Table.Cell>
              <Table.Cell>{skill.progress}</Table.Cell>
              <Table.Cell>
                <Button
                  icon="edit"
                  onClick={() => history.push(`/skill/${skill.id}`)}
                />
                <Button
                  icon="trash"
                  color="red"
                  onClick={() => deleteSkill(skill.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default observer(SkillList)
