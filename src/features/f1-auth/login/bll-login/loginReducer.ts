import { LoginActionsType } from "./loginActions";
import { loginInitialState, LoginInitState } from "./loginInitState";


export const loginReducer = (state = loginInitialState, action: LoginActionsType): LoginInitState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

