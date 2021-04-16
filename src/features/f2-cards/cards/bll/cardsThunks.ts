import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import { cardsAPI } from "../dal/cardsInstance";
import { CardsActions, CardsActionsType } from "./cardsActions";

export const getCards = (
  id: string
): ThunkAction<void, AppStoreType, unknown, CardsActionsType> => (dispatch) => {
  cardsAPI
    .getCards(id)
    .then(({ data }) => {
      dispatch(CardsActions.setCards(data.cards));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const addCard = (
  id: string
): ThunkAction<void, AppStoreType, unknown, CardsActionsType> => (dispatch) => {
  cardsAPI
    .addCard(id)
    .then(({ data }) => {
      dispatch(getCards(id));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deleteCard = (
  id: string,
  pack_id: string
): ThunkAction<void, AppStoreType, unknown, CardsActionsType> => (dispatch) => {
  cardsAPI.deleteCard(id).then((data) => {
    dispatch(getCards(pack_id));
  });
};

export const updateCard = (
  id: string,
  pack_id: string
): ThunkAction<void, AppStoreType, unknown, CardsActionsType> => (dispatch) => {
  cardsAPI.updateCard(id).then((data) => {
    dispatch(getCards(pack_id));
  });
};
