import { RootStore } from './rootStore';


export default class EducationStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}