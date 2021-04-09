import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../../../../main/ui/common/CustomButton/CustomButton'
import CustomCheckbox from '../../../../../main/ui/common/CustomCheckbox/CustomCheckbox'
import CustomInput from '../../../../../main/ui/common/CustomInput/CustomInput'
import s from './LoginForm.module.css'
import sUtils from './../../../../../main/ui/common/stylingUtils/navlinkStyling.module.css'
import { LoginDetailsType } from '../../dal-login/loginInstance'
import { PATH } from '../../../../../main/ui/routes/Routes'
import { useSelector } from 'react-redux'
import { AppStoreType } from '../../../../../main/bll/store'
import { CustomSnackbar } from '../../../../../main/ui/common/CustomSnackbar/CustomSnackbar'

type LoginFormType = {
    login: (userDetails: LoginDetailsType) => void
    error: string
}

export const LoginForm: FC<LoginFormType> = ({login, error}) => {

    const [details, setDetails] = useState<LoginDetailsType>({email: '', password: '', rememberMe: false})
    const loading = useSelector<AppStoreType, boolean>(state => state.login.loading)

    const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDetails({...details, email: e.target.value})
    }

    const passwordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDetails({...details, password: e.target.value})
    }

    const rememberMeOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDetails({...details, rememberMe: e.target.checked})
    }

    const detailsWrap = (e: MouseEvent<HTMLButtonElement>) => {
        login(details)
    }

    return (
        <>
            {error !== '' && <CustomSnackbar title={error}/>}
            <div className={s.loginForm}>
                <div className={s.loginGroup}>
                    <label htmlFor='email'>Email:</label>
                    <CustomInput onChange={emailOnChangeHandler} value={details.email} type='email' name='email' id='email'/>
                </div>
                <div className={s.loginGroup}>
                    <label htmlFor='password'>Password:</label>
                    <CustomInput onChange={passwordOnChangeHandler} value={details.password} type='password' name='password' id='password'/>
                </div>
                <div className={s.loginGroup}>
                    <CustomCheckbox onChange={rememberMeOnChangeHandler} checked={details.rememberMe} />
                    <label className={s.rememberMeLabel}>remember me</label>
                </div>
                <div className={s.loginGroup}>
                    <CustomButton type='submit'onClick={detailsWrap} disabled={loading}>Sign in</CustomButton>
                </div>
                <div className={s.loginGroup}>
                    <NavLink to={PATH.FORGOT} className={sUtils.loginLink}>forgot?</NavLink>
                    <NavLink to={PATH.REGISTER} className={sUtils.loginLink}>register</NavLink>
                </div>
            </div>
        </>
    )
}