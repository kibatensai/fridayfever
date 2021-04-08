import {Dispatch} from "redux";
import {setPassAPI} from "../dal-setPass/setPassInstance";
import {SetPassActions} from "./setPassActions";

export const SetPassTC = (email: string, id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(SetPassActions.setSuccess(false))
        const res = await setPassAPI.setPassword(email, id)
        dispatch(SetPassActions.setSuccess(false))
        dispatch(SetPassActions.setResponseMessage(res.data.info))
        dispatch(SetPassActions.setError(''))
        debugger
    } catch (e) {
        const error = e.response ? e.response.data.error : ("Unknown error")
        dispatch(SetPassActions.setError(error))
        dispatch(SetPassActions.setSuccess(false))
    }
}
