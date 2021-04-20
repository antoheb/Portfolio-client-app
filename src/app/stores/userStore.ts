import { action, computed, observable, runInAction } from 'mobx';
import { history } from '../..';
import Agent from '../api/Agent';
import { IUser, IUserFormValues } from '../models/user';
import { RootStore } from './rootStore';
import { Header } from 'semantic-ui-react';
import { AxiosResponse } from 'axios';

export default class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @observable role: string = "Guest";
    @observable loadingInitial = false;
  
    @computed get isLoggedIn() {
      return !!this.user;
    }
  
    @action login = async (values: IUserFormValues) => {
      this.loadingInitial = true;
      try {
        const headers = await Agent.Users.login(values);
        runInAction(() => {
          this.rootStore.commonStore.setToken(headers['authorization']);
        });
        history.push('/')
        this.loadingInitial = false;
      } catch (error) {
        this.loadingInitial = false;
        throw error;
      }
    };
}