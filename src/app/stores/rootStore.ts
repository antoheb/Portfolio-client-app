import { createContext } from 'react'
import { configure } from 'mobx'
import UserStore from './userStore'
import ExperienceStore from './experienceStore'
import EducationStore from './educationStore'
import ProjectStore from './projectStore'
import CommonStore from './commonStore'
import SkillStore from './skillStore'
import ModalStore from './modalStore'

configure({ enforceActions: 'always' })

export class RootStore {
  userStore: UserStore
  experienceStore: ExperienceStore
  educationStore: EducationStore
  projectStore: ProjectStore
  commonStore: CommonStore
  skillStore: SkillStore
  modalStore: ModalStore

  constructor() {
    this.userStore = new UserStore(this)
    this.experienceStore = new ExperienceStore(this)
    this.educationStore = new EducationStore(this)
    this.projectStore = new ProjectStore(this)
    this.commonStore = new CommonStore(this)
    this.skillStore = new SkillStore(this)
    this.modalStore = new ModalStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())
