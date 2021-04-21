import { InferActionsType } from "../../../../main/bll/action-types";
import { PackType } from "./packsInitState";


export type PacksActionsType = InferActionsType<typeof PacksActions>

export const PacksActions = {
    setPacks: (packs: PackType[]) =>
    ({
      type: "packs/SET_PACKS",
      packs,
    } as const),
    setPage: (page: number) =>
    ({
      type: "page/SET_PAGE",
      page,
    } as const),
    setPackId: (id: string) => ({
      type: 'packs/SET_PACK_ID',
      id
  } as const),
    setMinCardsCount: (minCardsCount: number) => ({
        type: 'packs/SET_MIN_CARDS_COUNT',
        minCardsCount
    } as const),
    setMaxCardsCount: (maxCardsCount: number) => ({
        type: 'packs/SET_MAX_CARDS_COUNT',
        maxCardsCount
    } as const),
}

