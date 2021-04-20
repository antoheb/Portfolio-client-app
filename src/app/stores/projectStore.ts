import { action, observable, runInAction } from 'mobx'
import { RootStore } from './rootStore'
import { IProject, IProjectFormValues } from '../models/project'
import Agent from '../api/Agent'
import { history } from '../..'

export default class ProjectStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable project: IProjectFormValues | null = null
  @observable loadingInitial = false
  @observable projectList: IProjectFormValues[] = []

  @action newProject = async (values: IProject) => {
    try {
      await Agent.Projects.insert(values)
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action loadProjectList = async () => {
    this.loadingInitial = true
    try {
      const list = await Agent.Projects.list()
      runInAction(() => {
        this.projectList = list
        this.loadingInitial = false
      })
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false
        throw error
      })
    }
  }

  @action loadProject = async (id: string) => {
    try {
      const project = await Agent.Projects.byId(id)
      return project
    } catch (error) {
      throw error
    }
  }

  @action modifyProject = async (id: string, project: IProject) => {
    try {
      await Agent.Projects.update(id, project)
      runInAction(() => {
        history.push('/project')
      })
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action deleteProject = async (id: string) => {
    try {
      const answer = window.confirm(
        'Do you really want to delete the project with id ' + id,
      )
      if (answer) {
        await Agent.Projects.delete(id)
        runInAction(() => {
          window.location.reload()
        })
      }
    } catch (error) {
      throw error
    }
  }
}
