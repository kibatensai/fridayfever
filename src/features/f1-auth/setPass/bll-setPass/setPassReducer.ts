import {SetPassActionsType} from "./setPassActions";
import {setPassInitialState, SetPassInitState} from "./setPassInitState";


export const setPassReducer = (state = setPassInitialState, action: SetPassActionsType): SetPassInitState => {
    switch (action.type) {
        case 'setPass/SET_ERROR':
            return {...state, error: action.error}
        case 'setPass/SET_SUCCESS':
            return {...state, success: action.success}
        case 'setPass/SET_MESSAGE':
            return {...state, responseMessage: action.message}
        default: {
            return state
        }
    }
};

