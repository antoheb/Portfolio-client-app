export interface IAuthentication {
    token: string;
}

export interface IAuthenticationFormValues
{
    username: string;
    password: string;
}

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    aboutMe: string
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phoneNumber: string;
}

export interface IUserFormValues
{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    aboutMe: string
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phoneNumber: string;
}