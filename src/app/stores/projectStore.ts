import { RootStore } from './rootStore';

export default class ProjectStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}