import { ProfileActionsType } from "./profileActions";
import { profileInitialState, ProfileInitState } from "./profileInitState";


export const profileReducer = (state = profileInitialState, action: ProfileActionsType): ProfileInitState => {
    switch (action.type) {
        case "profile/SET_USER": {
            return {
                ...state,
                user: action.user,
            }
        }
        default: {
            return state
        }
    }
};

