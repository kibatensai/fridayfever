import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../../../../main/ui/common/CustomButton/CustomButton'
import CustomCheckbox from '../../../../../main/ui/common/CustomCheckbox/CustomCheckbox'
import CustomInput from '../../../../../main/ui/common/CustomInput/CustomInput'
import s from './LoginForm.module.css'
import sUtils from './../../../../../main/ui/common/stylingUtils/navlinkStyling.module.css'

export const LoginForm = () => {

    const [email, setEmail] = useState<string | null>('')
    const [password, setPassword] = useState<string | null>('')

    const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }


    const passwordOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <>
            <div className={s.loginForm}>
                <div className={s.loginGroup}>
                    <label htmlFor='email'>Email:</label>
                    <CustomInput onChange={emailOnChangeHandler} type='email' name='email' id='email'/>
                </div>
                <div className={s.loginGroup}>
                    <label htmlFor='password'>Password:</label>
                    <CustomInput onChange={passwordOnChangeHandler} type='password' name='password' id='password'/>
                </div>
                <div className={s.loginGroup}>
                    <CustomButton type='submit'>Sign in</CustomButton>
                </div>
                <div className={s.loginGroup}>
                    <CustomCheckbox />
                    <label className={s.rememberMeLabel}>remember me</label>
                </div>
                <div className={s.loginGroup}>
                    <NavLink to='/forgot' className={sUtils.loginLink}>forgot?</NavLink>
                    <NavLink to='/register' className={sUtils.loginLink}>register</NavLink>
                </div>
            </div>
        </>
    )
}