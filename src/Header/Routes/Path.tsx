import React, {ReactNode} from "react";
import {Login} from "../Login/Login";
import {Registration} from "../Registration/Registration";
import {ChangePassword} from "../ChangePassword/ChangePassword";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {AllComponents} from "../AllComponents/AllComponents";
import {Profile} from "../Profile/Profile";
import {Error404} from "../Error404/Error404";
import {BasicButton} from "../../BasicComponents/BasicButton";
import {CheckBoxComponent} from "../../BasicComponents/CheckBoxComponent";
import {InputComponent} from "../../BasicComponents/InputComponent";


export type PageType = {
    id: number
    title: string
    path: string
    page: ReactNode

}


export const Path = {
    header: '/',
    login: '/login',
    profile: '/profile',
    passwordRecovery: '/passwordRecovery',
    changePassword: '/changePassword',
    allComponents: '/allComponents',
    registration: '/registration',
    error404: '/error404'
}

export const pages: PageType[] = [
    /* {id: 1, title: 'Header', path: Path.header, page: <Redirect to={Path.login}/>},*/
    {id: 1, title: 'Login', path: Path.login, page: <Login/>},
    {id: 2, title: 'Registration', path: Path.registration, page: <Registration/>},
    {id: 3, title: 'Change Password', path: Path.changePassword, page: <ChangePassword/>},
    {id: 4, title: 'Password Recovery', path: Path.passwordRecovery, page: <PasswordRecovery/>},
    {id: 5, title: 'All Components', path: Path.allComponents, page: <AllComponents/>},
   /* {id: 5, title: 'All Components', path: Path.allComponents, page: <CheckBoxComponent/>},
    {id: 5, title: 'All Components', path: Path.allComponents, page: <InputComponent/>},*/
    {id: 6, title: 'Profile', path: Path.profile, page: <Profile/>},
    {id: 7, title: 'Error404', path: Path.error404, page: <Error404/>},
]