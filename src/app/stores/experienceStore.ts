import { action, observable, runInAction } from 'mobx'
import { history } from '../..'
import Agent from '../api/Agent'
import { IExperience, IExperienceFormValues } from '../models/experience'
import { RootStore } from './rootStore'

export default class ExperienceStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable experience: IExperienceFormValues | null = null
  @observable loadingInitial = false
  @observable experienceList: IExperienceFormValues[] = []

  @action newExperience = async (values: IExperience) => {
    try {
      await Agent.Experiences.insert(values)
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action loadExperienceList = async () => {
    this.loadingInitial = true
    try {
      const list = await Agent.Experiences.list()
      runInAction(() => {
        this.experienceList = list
        this.loadingInitial = false
      })
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false
        throw error
      })
    }
  }

  @action loadExperience = async (id: string) => {
    try {
      const project = await Agent.Experiences.byId(id)
      return project
    } catch (error) {
      throw error
    }
  }

  @action modifyExperience = async (id: string, experience: IExperience) => {
    try {
      await Agent.Experiences.update(id, experience)
      runInAction(() => {
        history.push('/experience')
      })
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action deleteExperience = async (id: string) => {
    try {
      const answer = window.confirm(
        'Do you really want to delete the project with id ' + id,
      )
      if (answer) {
        await Agent.Experiences.delete(id)
        runInAction(() => {
          window.location.reload()
        })
      }
    } catch (error) {
      throw error
    }
  }
}
