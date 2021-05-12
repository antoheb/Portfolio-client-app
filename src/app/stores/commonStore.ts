import { action, makeObservable, observable, reaction, runInAction } from 'mobx'
import Agent from '../api/Agent'
import { IEmail } from '../models/email'
import { RootStore } from './rootStore'

export default class CommonStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeObservable(this)
    this.rootStore = rootStore

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('jwt', token)
        } else {
          window.localStorage.removeItem('jwt')
        }
      },
    )
  }

  @observable token: string | null = window.localStorage.getItem('jwt')
  @observable appLoaded = false

  @action setToken = (token: string | null) => {
    this.token = token
  }

  @action setAppLoaded = () => {
    this.appLoaded = true
  }

  @action sendEmail = (values: IEmail) => {
    try {
      Agent.Email.send(values)
      runInAction(() => {
        alert('Your email was send succesfully')
        window.location.reload()
      })
    } catch (error) {
      throw error
    }
  }
}
