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
        case "packs/SET_PACK_ID": {
            return {
                ...state,
                recent_pack_id: action.id
            }
        }
        case 'packs/SET_MIN_CARDS_COUNT': {
            return {
                ...state,
                minCardsCount: action.minCardsCount
            }
        }
        case 'packs/SET_MAX_CARDS_COUNT': {
            return {
                ...state,
                maxCardsCount: action.maxCardsCount
            }
        }
        default:
            return state
    }
}