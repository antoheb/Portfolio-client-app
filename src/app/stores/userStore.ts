import { action, computed, observable, runInAction } from 'mobx'
import { history } from '../..'
import Agent from '../api/Agent'
import { RootStore } from './rootStore'
import {
  IAuthenticationFormValues,
  IUser,
  IUserFormValues,
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

  @action modifyUser = async (id: string, user: IUserFormValues) => {
    try {
      await Agent.Users.update(id, user)
      runInAction(() => {
        history.push('/')
      })
      window.location.reload()
    } catch (error) {
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

  @action uploadPhoto = async (id: string, file: File) => {
    this.loadingInitial = true
    try {
      await Agent.Users.uploadPhoto(id, file)
      runInAction(() => {
        window.alert('Profile Picture Modified')
        window.location.reload()
      })
    } catch (error) {
      window.alert("Erreur lors du téléchargemnt de l'image")
      runInAction(() => (this.loadingInitial = false))
    }
  }
}
