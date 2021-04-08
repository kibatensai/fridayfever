import CustomInput from "../../../../../main/ui/common/CustomInput/CustomInput";
import CustomButton from "../../../../../main/ui/common/CustomButton/CustomButton";
import React, {ChangeEvent, useState} from "react";
import s from './SetPasswordForm.module.css'

type SetPasswordType = {
    setNewPassword: (password: string) => void
    success: boolean
    error: string
    responseMessage: string
    setError: (error: string) => void
}

export const SetPasswordForm = (props: SetPasswordType) => {

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const onPassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value)
    }
    const onPassword2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

    const onSetPasswordClickHandler = () => {
        password1 === password2 ? props.setNewPassword(password1) : props.setError('Passwords must match')
    }

    return (
        <div className={s.setPasswordPage}>
            {props.error !== '' && props.error}
            {props.responseMessage !== '' && props.responseMessage}
            <div><CustomInput type={'password'} value={password1} onChange={onPassword1Change}/></div>
            <div><CustomInput type={'password'} value={password2} onChange={onPassword2Change}/></div>
            <div><CustomButton onClick={onSetPasswordClickHandler} disabled={!props.success}>Set Password</CustomButton>
            </div>
        </div>
    )
}