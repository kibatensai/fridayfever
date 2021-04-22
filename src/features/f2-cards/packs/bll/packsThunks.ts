import {
  ErrorHandlingActions,
  ErrorHadnlingActionsType,
} from "./../../../../main/utils/ErrorHandling/bll/errorHandlingActions";
import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import { packsAPI, ParamsType } from "../dal/packsInstance";
import { PacksActions, PacksActionsType } from "./packsActions";

export const getPacks = (
  params: ParamsType
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  PacksActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  packsAPI
    .getPacks(params)
    .then(({ data }) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(PacksActions.setPacks(data.cardPacks));
      dispatch(PacksActions.setMinCardsCount(data.minCardsCount));
      dispatch(PacksActions.setMaxCardsCount(data.maxCardsCount));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const addPack = (
  name: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  PacksActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  packsAPI
    .addPack(name)
    .then((data) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getPacks({}));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const deletePack = (
  id: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  PacksActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  packsAPI
    .deletePack(id)
    .then((data) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getPacks({}));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};

export const updatePack = (
  id: string,
  name: string
): ThunkAction<
  void,
  AppStoreType,
  unknown,
  PacksActionsType | ErrorHadnlingActionsType
> => (dispatch) => {
  dispatch(ErrorHandlingActions.setLoading(true));
  packsAPI
    .updatePack(id, name)
    .then((data) => {
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(getPacks({}));
    })
    .catch((e) => {
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      dispatch(ErrorHandlingActions.setLoading(false));
      dispatch(ErrorHandlingActions.setError(error));
    });
};
