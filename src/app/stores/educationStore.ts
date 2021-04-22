import { action, observable, runInAction } from 'mobx'
import { history } from '../..'
import Agent from '../api/Agent'
import { IEducation, IEducationFormValues } from '../models/education'
import { RootStore } from './rootStore'

export default class EducationStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable education: IEducationFormValues | null = null
  @observable loadingInitial = false
  @observable educationList: IEducationFormValues[] = []

  @action newEducation = async (values: IEducation) => {
    try {
      await Agent.Educations.insert(values)
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action loadEducationList = async () => {
    this.loadingInitial = true
    try {
      const list = await Agent.Educations.list()
      runInAction(() => {
        this.educationList = list
        this.loadingInitial = false
      })
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false
        throw error
      })
    }
  }

  @action loadEducation = async (id: string) => {
    try {
      const project = await Agent.Educations.byId(id)
      return project
    } catch (error) {
      throw error
    }
  }

  @action modifyEducation = async (id: string, education: IEducation) => {
    try {
      await Agent.Educations.update(id, education)
      runInAction(() => {
        history.push('/education')
      })
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action deleteEducation = async (id: string) => {
    try {
      const answer = window.confirm(
        'Do you really want to delete the project with id ' + id,
      )
      if (answer) {
        await Agent.Educations.delete(id)
        runInAction(() => {
          window.location.reload()
        })
      }
    } catch (error) {
      throw error
    }
  }
}
