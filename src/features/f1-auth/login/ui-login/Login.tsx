import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AppStoreType } from "../../../../main/bll/store"
import { PATH } from "../../../../main/ui/routes/Routes"
import { signIn } from "../bll-login/loginThunks"
import { LoginDetailsType } from "../dal-login/loginInstance"
import { LoginForm } from "./LoginForm/LoginForm"

export const Login = () => {

    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)
    const error = useSelector<AppStoreType, string>(state => state.login.error)

    const login = (details: LoginDetailsType) => {
        dispatch(signIn(details))
    }

    if (success) return <Redirect to={PATH.PROFILE} />

    return (
        <>
            <LoginForm login={login} error={error}/>
        </>
    )
}