import { observer } from 'mobx-react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { IExperienceFormValues } from '../../../app/models/experience'
import { RootStoreContext } from '../../../app/stores/rootStore'
import AddExperienceForm from './AddExperienceForm'
import EditExperienceForm from './EditExperienceForm'
import ExperienceList from './ExperienceList'

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {}

const ExperiencePage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext)
  const {
    loadExperience,
    loadExperienceList,
    experienceList,
  } = rootStore.experienceStore
  const [loading, setLoading] = useState(true)
  const [experience, setExperience] = useState<IExperienceFormValues>()

  useEffect(() => {
    loadExperienceList().then(() => setLoading(false))
  }, [loadExperienceList])

  useEffect(() => {
    if (match.params.id) {
      loadExperience(match.params.id)
        .then((exp) => setExperience(exp))
        .finally(() => setLoading(false))
    }
  }, [loadExperience, setExperience, match.params.id, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <div>
        <Header as="h1">
          <Icon name="line graph" color="blue" />
          <Header.Content>
            My Experiences
            <Header.Subheader>
              Experience/Job of my life
            </Header.Subheader>
          </Header.Content>
        </Header>
        <ExperienceList experienceList={experienceList!} />
        {match.params.id ? (
          <EditExperienceForm experience={experience!} id={match.params.id} />
        ) : (
          <AddExperienceForm />
        )}
      </div>
    </Fragment>
  )
}

export default observer(ExperiencePage)
