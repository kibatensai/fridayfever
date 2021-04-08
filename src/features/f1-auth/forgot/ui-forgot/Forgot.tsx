import {ForgotForm} from "./ForgotForm/ForgotForm";
import {useDispatch, useSelector} from "react-redux";
import {ForgotTC} from "../bll-forgot/forgotThunks";
import {AppStoreType} from "../../../../main/bll/store";


export const Forgot = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppStoreType, string>(state => state.forgot.error)
    const success = useSelector<AppStoreType, boolean>(state => state.forgot.success)
    const message = useSelector<AppStoreType, string>(state => state.forgot.message)
    const forgot = (email: string) => {
        dispatch(ForgotTC(email))
    }

    return (
        <>
            <ForgotForm forgot={forgot} error={error} success={success} message={message}/>
        </>
    )
}