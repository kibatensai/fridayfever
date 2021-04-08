import {Dispatch} from "redux";
import {forgotAPI} from "../dal-forgot/forgotInstance";
import {ForgotActions} from "./forgotActions";

export const ForgotTC = (email: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(ForgotActions.setSuccess(false))
        const res = await forgotAPI.forgot(email)
        dispatch(ForgotActions.setSuccess(true))
        dispatch(ForgotActions.setMessage(res.data.info))
        console.log(res)
        debugger;
    } catch (e) {
        const error = e.response ? e.response.data.error : ("Unknown error")
        dispatch(ForgotActions.setError(error))
        dispatch(ForgotActions.setSuccess(true))
    }
}