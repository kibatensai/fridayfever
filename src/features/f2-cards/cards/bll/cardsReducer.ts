import {CardsActionsType} from './cardsActions'
import {CardsInitState, CardsStateType} from './cardsInitState'

export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case "cards/SET_CARDS": {
            return {
                ...state,
                cards: action.cards
            }
        }
        case 'cards/SET_CARD_ID': {
            return {
                ...state,
                recent_card_id: action.id
            }
        }
        default:
            return state
    }
}