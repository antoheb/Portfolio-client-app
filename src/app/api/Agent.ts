import axios from 'axios'
import { IProject, IProjectFormValues } from '../models/project'
import { IExperience, IExperienceFormValues } from '../models/experience'
import { IEducation, IEducationFormValues } from '../models/education'
import {
  IAuthenticationFormValues,
  IUser,
  IUserFormValues,
} from '../models/user'
import { ISkill, ISkillFormValues } from '../models/skill'
import { IEmail } from '../models/email'

axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(undefined, (error) => {
  throw error.response
})

const Users = {
  login: (user: IAuthenticationFormValues) =>
    axios.post(`/login`, user).then((response) => response.headers),

  getUser: (): Promise<IUser> =>
    axios.get('/api/user').then((response) => response.data),

  update: (id: string, values: IUserFormValues) =>
    axios.put(`/api/user/${id}`, values).then((response) => response.data),

  uploadPhoto: (id: string, file: File) => {
    let formData = new FormData();
    formData.append("file", file)
    axios.put(`/api/user/photo/${id}`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then((response) => response.data)},
}

const Projects = {
  list: (): Promise<IProjectFormValues[]> =>
    axios.get('/api/project').then((response) => response.data),

  byId: (id: string): Promise<IProjectFormValues> =>
    axios.get(`/api/project/${id}`).then((response) => response.data),

  insert: (values: IProject): Promise<IProjectFormValues> =>
    axios.post('/api/project', values).then((response) => response.data),

  update: (id: string, values: IProject) =>
    axios.put(`/api/project/${id}`, values).then((response) => response.data),

  delete: (id: string) =>
    axios.delete(`/api/project/${id}`).then((reponse) => reponse.data),
}

const Experiences = {
  list: (): Promise<IExperienceFormValues[]> =>
    axios.get('/api/experience').then((response) => response.data),

  byId: (id: string): Promise<IExperienceFormValues> =>
    axios.get(`/api/experience/${id}`).then((response) => response.data),

  insert: (values: IExperience): Promise<IExperienceFormValues> =>
    axios.post('/api/experience', values).then((response) => response.data),

  update: (id: string, values: IExperience) =>
    axios
      .put(`/api/experience/${id}`, values)
      .then((response) => response.data),

  delete: (id: string) =>
    axios.delete(`/api/experience/${id}`).then((reponse) => reponse.data),
}

const Educations = {
  list: (): Promise<IEducationFormValues[]> =>
    axios.get('/api/education').then((response) => response.data),

  byId: (id: string): Promise<IEducationFormValues> =>
    axios.get(`/api/education/${id}`).then((response) => response.data),

  insert: (values: IEducation): Promise<IEducationFormValues> =>
    axios.post('/api/education', values).then((response) => response.data),

  update: (id: string, values: IEducation) =>
    axios.put(`/api/education/${id}`, values).then((response) => response.data),

  delete: (id: string) =>
    axios.delete(`/api/education/${id}`).then((reponse) => reponse.data),
}

const Skills = {
  list: (): Promise<ISkillFormValues[]> =>
    axios.get('/api/skill').then((response) => response.data),

  byId: (id: string): Promise<ISkillFormValues> =>
    axios.get(`/api/skill/${id}`).then((response) => response.data),

  insert: (values: ISkill): Promise<ISkillFormValues> =>
    axios.post('/api/skill', values).then((response) => response.data),

  update: (id: string, values: ISkill) =>
    axios.put(`/api/skill/${id}`, values).then((response) => response.data),

  delete: (id: string) =>
    axios.delete(`/api/skill/${id}`).then((reponse) => reponse.data),
}

const Email = {
  send: (values: IEmail) =>
    axios.post('/api/email', values).then((response) => response.data),
}

export default {
  Users,
  Projects,
  Experiences,
  Educations,
  Skills,
  Email,
}
