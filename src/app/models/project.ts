export interface IProject {
    name: string;
    description: string;
    gitHubLink: string;
    projectLink: string;
    technologies: string;
}

export interface IProjectFormValues
{
    id: string;
    name: string;
    description: string;
    gitHubLink: string;
    projectLink: string;
    technologies: string;
}