import { action, observable, runInAction } from 'mobx'
import { history } from '../..'
import Agent from '../api/Agent'
import { ISkill, ISkillFormValues } from '../models/skill'
import { RootStore } from './rootStore'

export default class SkillStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable skill: ISkillFormValues | null = null
  @observable loadingInitial = false
  @observable skillsList: ISkillFormValues[] = []

  @action newSkill = async (values: ISkill) => {
    try {
      await Agent.Skills.insert(values)
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action loadSkillList = async () => {
    this.loadingInitial = true
    try {
      const list = await Agent.Skills.list()
      runInAction(() => {
        this.skillsList = list
        this.loadingInitial = false
      })
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false
        throw error
      })
    }
  }

  @action loadSkill = async (id: string) => {
    try {
      const skill = await Agent.Skills.byId(id)
      return skill
    } catch (error) {
      throw error
    }
  }

  @action modifySkill = async (id: string, skill: ISkill) => {
    try {
      await Agent.Skills.update(id, skill)
      runInAction(() => {
        history.push('/skill')
      })
      window.location.reload()
    } catch (error) {
      throw error
    }
  }

  @action deleteSkill = async (id: string) => {
    try {
      const answer = window.confirm(
        'Do you really want to delete the skill with id ' + id,
      )
      if (answer) {
        await Agent.Skills.delete(id)
        runInAction(() => {
          window.location.reload()
        })
      }
    } catch (error) {
      throw error
    }
  }
}
