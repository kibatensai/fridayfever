import { LoginActionsType } from "./loginActions";
import { loginInitialState, LoginInitState } from "./loginInitState";


export const loginReducer = (state = loginInitialState, action: LoginActionsType): LoginInitState => {
    switch (action.type) {
        case "login/SET_ERROR": {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case "login/SET_SUCCESS": {
            return {
                ...state,
                error: "",
                loading: false,
                success: action.success,
            }
        }
        case "login/SET_LOADING": {
            return {
                ...state,
                error: "",
                loading: action.loading,
                success: false,
            }
        }
        case "login/SET_USER_ID": {
            return {
                ...state,
                user_id: action.userId
            }
        }
        default: {
            return state
        }
    }
};

