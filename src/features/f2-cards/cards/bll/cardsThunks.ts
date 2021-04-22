import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import {
  ErrorHadnlingActionsType,
  ErrorHandlingActions,
} from "../../../../main/utils/ErrorHandling/bll/errorHandlingActions";
import { cardsAPI, GetCardsParamsType } from "../dal/cardsInstance";
import { CardsActions, CardsActionsType } from "./cardsActions";

export const getCards = (
  id: string,
  params?: GetCardsParamsType
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  CardsActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  cardsAPI
    .getCards(id, params)
    .then(({ data }) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(CardsActions.setCards(data.cards));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const addCard = (
  id: string,
  question: string,
  answer: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  CardsActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  cardsAPI
    .addCard(id, question, answer)
    .then(({ data }) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getCards(id));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const deleteCard = (
  id: string,
  pack_id: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  CardsActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  cardsAPI
    .deleteCard(id)
    .then((data) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getCards(pack_id));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const updateCard = (
  id: string,
  pack_id: string,
  question: string,
  answer: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  CardsActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  cardsAPI
    .updateCard(id, question, answer)
    .then((data) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getCards(pack_id));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};
