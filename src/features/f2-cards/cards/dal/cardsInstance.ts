import { instance } from "../../../../main/dal/instance";
import { CardType } from "../bll/cardsInitState";

type GetCardsDataType = {
  cards: CardType[];
  error: string;
};

export const cardsAPI = {
  getCards(cardsPack_id: string) {
    return instance.get<GetCardsDataType>(
      `cards/card?cardsPack_id=${cardsPack_id}`
    );
  },
  addCard(cardsPack_id: string) {
    return instance.post("cards/card", {
      card: {
        cardsPack_id,
        question: "Why are we here?",
        grade: Math.floor(Math.random() * 5),
        answer: "Just to suffer",
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
};
