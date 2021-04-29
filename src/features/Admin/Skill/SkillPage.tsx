import React, { Fragment, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { ISkillFormValues } from '../../../app/models/skill'
import { RootStoreContext } from '../../../app/stores/rootStore'
import AddSkillForm from './AddSkillForm'
import EditSkillForm from './EditSkillForm'
import SkillList from './SkillList'

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {}

export const SkillPage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext)
  const { loadSkill, loadSkillList, skillsList } = rootStore.skillStore
  const [loading, setLoading] = useState(true)
  const [skill, setSkill] = useState<ISkillFormValues>()

  useEffect(() => {
    loadSkillList().then(() => setLoading(false))
  }, [loadSkillList])

  useEffect(() => {
    if (match.params.id) {
      loadSkill(match.params.id)
        .then((skill) => setSkill(skill))
        .finally(() => setLoading(false))
    }
  }, [loadSkill, setSkill, match.params.id, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <div>
        <Header as="h1">
          <Icon name="idea" color="blue" />
          <Header.Content>
            My Skills
            <Header.Subheader>Manage my skill</Header.Subheader>
          </Header.Content>
        </Header>
        <SkillList skillList={skillsList!} />
        {match.params.id ? (
          <EditSkillForm skill={skill!} id={match.params.id} />
        ) : (
          <AddSkillForm />
        )}
      </div>
    </Fragment>
  )
}
