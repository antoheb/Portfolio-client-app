import { action, computed, observable, runInAction } from 'mobx'
import { history } from '../..'
import Agent from '../api/Agent'
import { RootStore } from './rootStore'
import {
  IAuthentication,
  IAuthenticationFormValues,
  IUser,
} from '../models/user'

export default class UserStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable user: IUser | null = null
  @observable loadingInitial = false

  @computed get isLoggedIn() {
    return !!this.user
  }

  @action getUser = async () => {
    this.loadingInitial = true
    try {
      const user = await Agent.Users.getUser()
      runInAction(() => {
        this.user = user
      })
      this.loadingInitial = false
    } catch (error) {
      this.loadingInitial = false
      throw error
    }
  }

  @action login = async (values: IAuthenticationFormValues) => {
    this.loadingInitial = true
    try {
      const headers = await Agent.Users.login(values)
      runInAction(() => {
        this.rootStore.commonStore.setToken(headers['authorization'])
      })
      history.push('/')
      this.loadingInitial = false
    } catch (error) {
      this.loadingInitial = false
      throw error
    }
  }

  @action logout = () => {
    this.loadingInitial = true
    try {
      this.rootStore.commonStore.setToken(null)
      this.user = null
      history.push('/')
      window.location.reload()
    } catch (error) {
      throw error
    }
    this.loadingInitial = false
  }
}
