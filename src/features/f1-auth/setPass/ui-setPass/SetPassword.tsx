import React from "react"
import {SetPasswordForm} from "./SetPasswordForm/SetPasswordForm";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {SetPassTC} from "../bll-setPass/setPassThunks";
import {AppStoreType} from "../../../../main/bll/store";
import {SetPassActions} from "../bll-setPass/setPassActions";

export const SetPassword = () => {

    const dispatch = useDispatch()
    const error = useSelector<AppStoreType, string>(state => state.setPass.error)
    const success = useSelector<AppStoreType, boolean>(state => state.setPass.success)
    const responseMessage = useSelector<AppStoreType, string>(state => state.setPass.responseMessage)
    const {id} = useParams<{ id?: string }>();
    const setNewPassword = (password: string) => {
        if (id && id !== ':id') {

            dispatch(SetPassTC(password, id))
        } else if (id === ':id') {
            dispatch(SetPassActions.setError('If you want to change your password you should open this page using link'))
        }
    }

    const setError = (error: string) => {
        dispatch(SetPassActions.setError(error))
    }

    return (
        <SetPasswordForm setNewPassword={setNewPassword} error={error} success={success}
                         responseMessage={responseMessage} setError={setError}/>
    )
}

