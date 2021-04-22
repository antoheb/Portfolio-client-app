import { observer } from 'mobx-react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { IEducationFormValues } from '../../../app/models/education'
import { RootStoreContext } from '../../../app/stores/rootStore'
import AddEducationForm from './AddEducationForm'
import EditEducationForm from './EditEducationForm'
import EducationList from './EducationList'

interface RouteParams {
  id: string
}

interface IProps extends RouteComponentProps<RouteParams> {}

const ExperiencePage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext)
  const {
    loadEducation,
    loadEducationList,
    educationList,
  } = rootStore.educationStore
  const [loading, setLoading] = useState(true)
  const [education, setEducation] = useState<IEducationFormValues>()

  useEffect(() => {
    loadEducationList().then(() => setLoading(false))
  }, [loadEducationList])

  useEffect(() => {
    if (match.params.id) {
      loadEducation(match.params.id)
        .then((exp) => setEducation(exp))
        .finally(() => setLoading(false))
    }
  }, [loadEducation, setEducation, match.params.id, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <div>
        <Header as="h1">
          <Icon name="graduation cap" color="blue" />
          <Header.Content>
            My Education
            <Header.Subheader>
              Highschool, College and University I went
            </Header.Subheader>
          </Header.Content>
        </Header>
        <EducationList educationList={educationList!} />
        {match.params.id ? (
          <EditEducationForm education={education!} id={match.params.id} />
        ) : (
          <AddEducationForm />
        )}
      </div>
    </Fragment>
  )
}

export default observer(ExperiencePage)
