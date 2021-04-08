import {ForgotActionsType} from "./forgotActions";
import {forgotInitialState, ForgotInitState} from "./forgotInitState";


export const forgotReducer = (state = forgotInitialState, action: ForgotActionsType): ForgotInitState => {
    switch (action.type) {
        case "forgot/SET_ERROR":
            return {...state, error: action.error}
        case "forgot/SET_SUCCESS":
            return {...state, success: action.success}
        case "forgot/SET_MESSAGE":
            return {...state, message: action.message}
        default: {
            return state
        }
    }
};

