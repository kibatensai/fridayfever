import React from "react"
import {SetPasswordForm} from "./SetPasswordForm/SetPasswordForm";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {SetPassTC} from "../bll-setPass/setPassThunks";

export const SetPassword = () => {

    const dispatch = useDispatch()

    const { id } = useParams<{id?: string}>();

    const setNewPassword = (password: string) => {
        if (id)
        dispatch(SetPassTC(password, id))
    }

    return (
        <SetPasswordForm setNewPassword={setNewPassword}/>
    )
}

