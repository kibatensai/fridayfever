import { PacksActionsType } from './packsActions'
import {PacksInitState, PacksStateType} from './packsInitState'

export const packsReducer = (state = PacksInitState, action: PacksActionsType): PacksStateType => {
    switch (action.type) {
        case "packs/SET_PACKS": {
            return {
                ...state,
                packs: action.packs
            }
        }
        default:
            return state
    }
}