import { RegisterActionsType } from "./registerActions";
import { registerInitialState, RegisterInitState } from "./registerInitState";


export const registerReducer = (state = registerInitialState, action: RegisterActionsType): RegisterInitState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

