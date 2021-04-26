import React, { memo, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AppStoreType } from "../../../../main/bll/store"
import CustomButton from "../../../../main/ui/common/CustomButton/CustomButton"
import { Preloader } from "../../../../main/ui/common/CustomPreloader/CustomPreloader"
import { PATH } from "../../../../main/ui/routes/Routes"
import { me, signOut } from "../../login/bll-login/loginThunks"
import { UserType } from "../bll-profile/profileInitState"
import s from './Profile.module.css'

export const Profile = memo(() => {
    const dispatch = useDispatch()
    const user = useSelector<AppStoreType, UserType>(state => state.profile.user)
    const success = useSelector<AppStoreType, boolean>(state => state.login.success)
    const loading = useSelector<AppStoreType, boolean>(state => state.login.loading)
    const [isAuth, setIsAuth] = useState<boolean>(success)

    const [name, setName] = useState<string>(user.name)
    const [avatar, setAvatar] = useState<string | undefined>(user.avatar)

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
                <div className={s.profile}>
                    <div className={s.logoutBlock}>
                        <span className={s.logout}>You are authorized</span>
                        <CustomButton onClick={logout} disabled={loading}>
                            Log Out
                        </CustomButton>
                    </div>
                    <div className={s.profileBlock}>
                        <img className={s.avatar} src={user.avatar} alt={'avatar'} />

                        <div>name: {user.name}</div>
                        <div>email: {user.email}</div>
                    </div>
                </div>

            }
        </>
    )
})