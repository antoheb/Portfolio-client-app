import { observer } from 'mobx-react'
import UserLayout from './UserLayout'
import 'semantic-ui-css/semantic.min.css'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { RootStoreContext } from '../stores/rootStore'
import { LoadingComponent } from './LoadingComponent'

const App: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { token } = rootStore.commonStore
  const { getUser } = rootStore.userStore
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser().then(() => setLoading(false))
  }, [getUser, setLoading])

  if (loading) {
    return <LoadingComponent content="Loading..." />
  }

  return <Fragment>{!token ? <UserLayout /> : <AdminLayout />}</Fragment>
}

export default observer(App)
