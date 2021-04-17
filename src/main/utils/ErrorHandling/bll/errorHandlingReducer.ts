import { ErrorHadnlingActionsType } from "./errorHandlingActions";
import { errorHandlingInitialState, ErrorHandlingInitState } from "./errorHandlingInitState";

export const errorHandlingReducer = (state = errorHandlingInitialState, action: ErrorHadnlingActionsType): ErrorHandlingInitState => {
    switch (action.type) {
        case "errorHandling/SET_ERROR": {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case "errorHandling/SET_SUCCESS": {
            return {
                ...state,
                error: "",
                loading: false,
                success: action.success,
            }
        }
        case "errorHandling/SET_LOADING": {
            return {
                ...state,
                error: "",
                loading: action.loading,
                success: false,
            }
        }
        default: {
            return state
        }
    }
};