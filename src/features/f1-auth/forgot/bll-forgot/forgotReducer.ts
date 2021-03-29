import { ForgotActionsType } from "./forgotActions";
import { forgotInitialState, ForgotInitState } from "./forgotInitState";


export const forgotReducer = (state = forgotInitialState, action: ForgotActionsType): ForgotInitState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

