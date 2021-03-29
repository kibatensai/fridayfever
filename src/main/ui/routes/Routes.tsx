import React from "react"
import { Switch } from "react-router"
import { Redirect, Route } from "react-router-dom"
import { TestComponent } from "../../../features/f0-test/TestComponent/ui/TestComponent"
import { Forgot } from "../../../features/f1-auth/forgot/ui-forgot/Forgot"
import { Login } from "../../../features/f1-auth/login/ui-login/Login"
import { Profile } from "../../../features/f1-auth/profile/ui-profile/Profile"
import { Register } from "../../../features/f1-auth/register/ui-register/Register"
import { SetPassword } from "../../../features/f1-auth/setPass/ui-setPass/SetPassword"
import { ErrorPage } from "../errorPage/ui/ErrorPage"

export const PATH = {
    HOME: '/',
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    FORGOT: '/forgot',
    SET_PASS: '/set-new-password',
    TEST: '/test',
    ERROR_PAGE: '/404'

    // add paths
}


export const Routes = () => {
    return (
        <>
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу TEST*/}
                <Route path={PATH.HOME} exact render={() => <Redirect to={PATH.TEST} />} />

                <Route path={PATH.LOGIN} render={() => <Login />} />
                <Route path={PATH.REGISTER} render={() => <Register />} />
                <Route path={PATH.PROFILE} render={() => <Profile />} />
                <Route path={PATH.FORGOT} render={() => <Forgot />} />
                <Route path={PATH.SET_PASS} render={() => <SetPassword />} />
                <Route path={PATH.TEST} render={() => <TestComponent />} />


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <ErrorPage />} />
            </Switch>
        </>
    )
}