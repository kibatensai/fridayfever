import {InferActionsType} from "../../../../main/bll/action-types";
import {CardType} from "./cardsInitState";


export type CardsActionsType = InferActionsType<typeof CardsActions>

export const CardsActions = {
    setCards: (cards: CardType[]) => ({
        type: 'cards/SET_CARDS',
        cards
    } as const)
}