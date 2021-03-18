import { RootStore } from './rootStore';

export default class ExperienceStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}