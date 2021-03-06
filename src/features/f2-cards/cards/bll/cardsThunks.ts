import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "../../../../main/bll/store";
import {
    ErrorHandlingActionsType,
    ErrorHandlingActions,
} from "../../../../main/utils/ErrorHandling/bll/errorHandlingActions";
import {cardsAPI, GetCardsParamsType} from "../dal/cardsInstance";
import {CardsActions, CardsActionsType} from "./cardsActions";
import {AnswerRateType} from "../../../f3-learning/learning/ui/Learning";

export const getCards = (
    id: string,
    params?: GetCardsParamsType
): ThunkAction<void,
    AppStoreType,
    unknown,
    CardsActionsType | ErrorHandlingActionsType> => (dispatch) => {
    dispatch(ErrorHandlingActions.setLoading(true));
    dispatch(ErrorHandlingActions.setGetNewCards(false))
    cardsAPI
        .getCards(id, params)
        .then(({data}) => {
            dispatch(CardsActions.setCards(data.cards));
            dispatch(ErrorHandlingActions.setLoading(false));
            dispatch(ErrorHandlingActions.setGetNewCards(true))
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : e.message + ", more details in the console";
            dispatch(ErrorHandlingActions.setLoading(false));
            dispatch(ErrorHandlingActions.setError(error));
            dispatch(ErrorHandlingActions.setGetNewCards(true))
        });
};

export const addCard = (
    id: string,
    question: string,
    answer: string
): ThunkAction<void,
    AppStoreType,
    unknown,
    CardsActionsType | ErrorHandlingActionsType> => (dispatch) => {
    dispatch(ErrorHandlingActions.setLoading(true));
    cardsAPI
        .addCard(id, question, answer)
        .then(({data}) => {
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
): ThunkAction<void,
    AppStoreType,
    unknown,
    CardsActionsType | ErrorHandlingActionsType> => (dispatch) => {
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
): ThunkAction<void,
    AppStoreType,
    unknown,
    CardsActionsType | ErrorHandlingActionsType> => (dispatch) => {
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

export const updateCardGrade = (
    id: string,
    grade: AnswerRateType,
    pack_id: string
): ThunkAction<void,
    AppStoreType,
    unknown,
    CardsActionsType | ErrorHandlingActionsType> => (dispatch) => {
    dispatch(ErrorHandlingActions.setLoading(true));
    cardsAPI
        .updateCardGrade(grade, id)
        .then(({data}) => {
            dispatch(ErrorHandlingActions.setLoading(false));
            dispatch(CardsActions.updateCardsRate(data.updatedGrade.card_id, data.updateGrade.grade));
        })
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : e.message + ", more details in the console";
            dispatch(ErrorHandlingActions.setLoading(false));
            dispatch(ErrorHandlingActions.setError(error));
        });
};
