import { useSelector } from "react-redux"
import { AppStoreType } from "../../../../main/bll/store"
import { LoginForm } from "./LoginForm/LoginForm"

export const Login = () => {

    const email = useSelector<AppStoreType, string | null>((state) => state.login.email)
    const password = useSelector<AppStoreType, string | null>((state) => state.login.password)

    return (
        <>
            <LoginForm />
        </>
    )
}