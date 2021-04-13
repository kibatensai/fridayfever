import { CardsActionsType } from './cardsActions'
import {CardsInitState, CardsStateType} from './cardsInitState'

export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        default:
            return state
    }
}