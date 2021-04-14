import axios from "axios";
import { devURL, herokuURL } from "../../../../main/dal/baseURLs";
import { PackType } from "../bll/packsInitState";

const instance = axios.create({
  baseURL: herokuURL,
  withCredentials: true,
});

export type ParamsType = {
    packName?: string | undefined
    min?: number | undefined
    max?: number | undefined
    sortPacks?: string | undefined
    page?: number | undefined
    pageCount?: number | undefined
    user_id?: string | undefined
}

export const packsAPI = {
  getPacks(params: ParamsType) {
    return instance.get<GetDataType>("cards/pack", {
      params: {
        ...params
      }
    });
  },
};

export type GetDataType = {
  cardPacks: PackType[];
  error: string;
};