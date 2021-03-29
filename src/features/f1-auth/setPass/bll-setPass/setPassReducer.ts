import { SetPassActionsType } from "./setPassActions";
import { setPassInitialState, SetPassInitState } from "./setPassInitState";


export const setPassReducer = (state = setPassInitialState, action: SetPassActionsType): SetPassInitState => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

