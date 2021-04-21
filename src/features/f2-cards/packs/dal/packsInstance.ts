import axios from "axios";
import { instance } from "../../../../main/dal/instance";
import { PackType } from "../bll/packsInitState";
// Conflict №3 Unnecessary url import


export type ParamsType = {
  packName?: string | undefined;
  min?: number | undefined;
  max?: number | undefined;
  sortPacks?: string | undefined;
  page?: number | undefined;
  pageCount?: number | undefined;
  user_id?: string | undefined;
};

export const packsAPI = {
  getPacks(params: ParamsType) {
    return instance.get<GetDataType>('cards/pack', {
      params: {
        pageCount: 100,
        ...params,
      },
    });
  },
  addPack() {
    return instance.post('cards/pack', {
      cardsPack: {
        name: 'adding pack test',
      },
    });
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack?id=${id}`);
  },
  updatePack(id: string) {
    return instance.put('cards/pack', {
      cardsPack: {
        _id: id,
        name: 'updating pack test',
      },
    });
  },
};

export type GetDataType = {
  cardPacks: PackType[];
  error: string;
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
};
