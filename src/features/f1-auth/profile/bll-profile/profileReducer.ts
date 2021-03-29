import { ProfileActionsType } from "./profileActions";
import { profileInitialState, ProfileInitState } from "./profileInitState";


export const profileReducer = (state = profileInitialState, action: ProfileActionsType): ProfileInitState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

