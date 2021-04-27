import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { LoginForm } from '../../features/login/LoginForm'
import { RootStoreContext } from '../stores/rootStore'
import { LoadingComponent } from './LoadingComponent'
import { Portfolio } from '../../features/user/Portfolio'

const UserLayout: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { loadEducationList } = rootStore.educationStore
  const { loadExperienceList } = rootStore.experienceStore
  const { loadProjectList } = rootStore.projectStore
  const { loadSkillList } = rootStore.skillStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadEducationList()
  }, [loadEducationList])

  useEffect(() => {
    loadProjectList()
  }, [loadProjectList])

  useEffect(() => {
    loadSkillList()
  }, [loadSkillList])

  useEffect(() => {
    loadExperienceList().finally(() => setLoading(false))
  }, [loadExperienceList, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Fragment>
  )
}

export default observer(UserLayout)
