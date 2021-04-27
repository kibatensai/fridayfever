import {ErrorHandlingActionsType} from "./errorHandlingActions";
import {errorHandlingInitialState, ErrorHandlingInitState} from "./errorHandlingInitState";

export const errorHandlingReducer = (state = errorHandlingInitialState, action: ErrorHandlingActionsType): ErrorHandlingInitState => {
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
        case "errorHandling/SET_GET_NEW_CARDS": {
            return {
                ...state,
                getNewCards: action.getNewCards
            }
        }
        default: {
            return state
        }
    }
};