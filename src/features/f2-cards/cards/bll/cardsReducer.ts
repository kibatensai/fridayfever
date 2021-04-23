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
        case 'cards/UPDATE_CARD_RATE': {
            return {
                ...state,
                cards: state.cards.map(card => card._id === action.card_id ? {...card, grade: action.rate} : card)
            }
        }
        default:
            return state
    }
}