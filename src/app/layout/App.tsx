import { observer } from 'mobx-react'
import UserLayout from './UserLayout'
import 'semantic-ui-css/semantic.min.css'
import React, { Fragment, useContext, useEffect } from 'react'
import AdminLayout from './AdminLayout'
import { RootStoreContext } from '../stores/rootStore'
import { LoadingComponent } from './LoadingComponent'

const App: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { token, setAppLoaded, appLoaded } = rootStore.commonStore

  return <Fragment>{!token ? <UserLayout /> : <AdminLayout />}</Fragment>
}

export default observer(App)
