import {instance} from "../../../../main/dal/instance";
import {CardType} from "../bll/cardsInitState";
import {AnswerRateType} from "../../../f3-learning/learning/ui/Learning";

type GetCardsDataType = {
    cards: CardType[];
    error: string;
    maxGrade: number;
    minGrade: number;
};

export type GetCardsParamsType = {
    min?: number;
    max?: number;
    sortCards?: string;
    page?: number;
    pageCount?: number;
    cardQuestion?: string;
    cardAnswer?: string;
};

export const cardsAPI = {
    getCards(cardsPack_id: string, params?: GetCardsParamsType) {
        return instance.get<GetCardsDataType>(
            `cards/card?cardsPack_id=${cardsPack_id}`,
            {
                params: {
                    pageCount: 100,
                    ...params,
                },
            }
        );
    },
    addCard(cardsPack_id: string, question: string, answer: string) {
        return instance.post("cards/card", {
            card: {
                cardsPack_id,
                question,
                grade: Math.floor(Math.random() * 5),
                answer,
            },
        });
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card?&id=${id}`);
    },
    updateCard(id: string, question: string, answer: string) {
        return instance.put(`cards/card`, {
            card: {
                _id: id,
                question,
                answer,
            },
        });
    },
    updateCardGrade(grade: AnswerRateType, id: string) {
        return instance.put(`/cards/grade`, {
                grade: grade,
                card_id: id
        })
    }
};
