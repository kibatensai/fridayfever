import {InferActionsType} from "../../../../main/bll/action-types";
import {CardType} from "./cardsInitState";
import {AnswerRateType} from "../../../f3-learning/learning/ui/Learning";


export type CardsActionsType = InferActionsType<typeof CardsActions>

export const CardsActions = {
    setCards: (cards: CardType[]) => ({
        type: 'cards/SET_CARDS',
        cards
    } as const),
    setCardId: (id: string) => ({
        type: 'cards/SET_CARD_ID',
        id
    } as const),
    updateCardsRate: (card_id: string, rate: AnswerRateType) => ({
        type: 'cards/UPDATE_CARD_RATE',
        card_id,
        rate
    }as const)
}