import { InferActionsType } from "../../../../main/bll/action-types";
import { PackType } from "./packsInitState";


export type PacksActionsType = InferActionsType<typeof PacksActions>

export const PacksActions = {
    setPacks: (packs: PackType[]) =>
    ({
      type: "packs/SET_PACKS",
      packs,
    } as const),
    setPackId: (id: string) => ({
      type: 'packs/SET_PACK_ID',
      id
  } as const),

}