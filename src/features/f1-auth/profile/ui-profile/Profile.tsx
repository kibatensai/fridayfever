import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AppStoreType } from "../../../../main/bll/store"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import { Preloader } from "../../../../main/ui/common/CustomPreloader/CustomPreloader"
import { PATH } from "../../../../main/ui/routes/Routes"
import { me, signOut } from "../../login/bll-login/loginThunks"

export const Profile = () => {
    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)
    const loading = useSelector<AppStoreType, boolean>(state => state.login.loading)
    const [isAuth, setIsAuth] = useState<boolean>(success)

    useEffect(() => {
        dispatch(me())
    }, [dispatch])

    const logout = useCallback(() => {
        dispatch(signOut())
        setIsAuth(() => false)
    }, [])

    if (!isAuth) { return <Redirect to={PATH.LOGIN} /> }

    return (
        <>
            {loading ?
                <Preloader />
                :
                <>
                    <span>You are authorized</span>
                    <CustomButton onClick={logout} disabled={loading}>
                        Log Out
                    </CustomButton>
                </>
            }
        </>
    )
}