import { ThunkAction } from "redux-thunk";
import { AppStoreType } from "../../../../main/bll/store";
import { packsAPI, ParamsType } from "../dal/packsInstance";
import { PacksActions, PacksActionsType } from "./packsActions";

export const getPacks = (params: ParamsType): ThunkAction<void, AppStoreType, unknown, PacksActionsType> => (dispatch) => {
    packsAPI.getPacks(params)
        .then(({data}) => {
            dispatch(PacksActions.setPacks(data.cardPacks))
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
}