import React, {ChangeEvent, useState} from "react";
import {NavLink} from 'react-router-dom'
import CustomButton from "../../../../../main/ui/common/CustomButton/CustomButton";
import CustomInput from "../../../../../main/ui/common/CustomInput/CustomInput";
import sUtils from './../../../../../main/ui/common/stylingUtils/navlinkStyling.module.css'
import s from './ForgotForm.module.css'


type ForgotFormPropsType = {
    forgot: (email: string) => void
    error: string
    success: boolean
    message: string
}

export const ForgotForm = (props: ForgotFormPropsType) => {
    const [login, setLogin] = useState('')
    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }
    return (
        <div className={s.forgotForm}>
            <div>Your login</div>
            {props.error !== '' && props.error}
            {props.message !== '' && props.message}
            <CustomInput type="text" value={login} onChange={onLoginChange}/>
            <div><CustomButton onClick={() => props.forgot(login)} disabled={!props.success}>send</CustomButton></div>
            <div>
                <NavLink to={'/login'} className={sUtils.loginLink}>Login</NavLink>
            </div>
        </div>
    )
}